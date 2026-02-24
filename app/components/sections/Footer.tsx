import Link from "next/link";
import ButtonWhite from "../ButtonWhite";

export default function Footer() {
  return (
    <section className="max-w-7xl mx-auto w-full px-3 md:px-6 lg:px-20 py-8">
      <div
        className="w-full px-12 py-16"
        style={{
          background: "#0a0a0a",
          borderRadius: "24px",
          boxShadow:
            "inset 0 0 24px 0 rgba(255,255,255,0.8), inset 0 0 16px 0 rgba(255,255,255,0.8), 0 8px 48px 0 rgba(0,0,0,0.28)",
        }}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-4">
          Have any queries or any<br />outbursting idea ??
        </h2>

        <p className="text-white/40 text-base mb-8">
          Lets chat over a cup of <span className="text-white/40 font-bold">chai</span>
        </p>

        <ButtonWhite href="mailto:satyaprakashray999@gmail.com">
          Lets Talk
        </ButtonWhite>
      </div>
    </section>
  );
}
