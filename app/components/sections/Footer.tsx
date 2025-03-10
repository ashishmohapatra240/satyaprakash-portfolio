import Link from "next/link";
export default function Footer() {
  return (
    <section className="min-h-5/6 bg-[#0E0F16] flex flex-col items-start justify-center px-4 md:px-36 py-10">
      <div className="w-full max-w-7xl flex flex-row justify-between">
        {/* Main Content */}
        <div className="space-y-6 text-left mb-16">
          <h2 className="text-4xl md:text-7xl text-white font-medium leading-tight mt-24">
            Have any queries or any
            <br />
            outbursting idea ??
          </h2>
          <p className="text-gray-400">Lets chat over a cup of coffee</p>
          <Link
            href="mailto:your-email@example.com"
            className="inline-block px-8 py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            Lets talk
          </Link>
        </div>
      </div>
    </section>
  );
}
