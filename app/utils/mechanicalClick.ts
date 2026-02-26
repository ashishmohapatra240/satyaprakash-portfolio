let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  return audioCtx;
}

// Call this on the first user gesture (e.g. loader click) to pre-warm the
// AudioContext so subsequent playMechanicalClick() calls fire with zero delay.
export function warmupAudioCtx() {
  try {
    const ctx = getCtx();
    if (ctx.state === "suspended") ctx.resume();
  } catch (_) {}
}

function fire(ctx: AudioContext, volume: number) {
  const now = ctx.currentTime;
  const dur = 0.035; // 35ms click

  // Exponentially-decaying noise burst
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++)
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.2));

  const src = ctx.createBufferSource();
  src.buffer = buf;

  // Bandpass at ~2.5kHz for mechanical key character
  const bpf = ctx.createBiquadFilter();
  bpf.type = "bandpass";
  bpf.frequency.value = 2500;
  bpf.Q.value = 1.2;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

  src.connect(bpf);
  bpf.connect(gain);
  gain.connect(ctx.destination);
  src.start(now);
  src.stop(now + dur + 0.01);
}

export function playMechanicalClick(volume = 0.45) {
  try {
    const ctx = getCtx();
    if (ctx.state === "suspended") {
      // Wait for resume before scheduling so currentTime is accurate
      ctx.resume().then(() => fire(ctx, volume));
    } else {
      fire(ctx, volume);
    }
  } catch (_) {}
}
