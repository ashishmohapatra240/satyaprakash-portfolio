import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <section className="min-h-[50vh] bg-[#0E0F16] flex flex-col items-start justify-center">
      <div className="w-full flex flex-row justify-between widescreenConstraint">
        {/* Main Content */}
        <div className="space-y-6 text-left mb-16">
          <h2 className="text-4xl md:text-7xl text-white font-medium leading-tight mt-24">
            Have any queries or any
            <br />
            outbursting idea ??
          </h2>
          <p className="text-white">Lets chat over a cup of coffee</p>
          <div className="flex flex-row gap-4">
            <Link
              href="https://calendly.com/satyaprakashray999/30min"
              className="inline-block bg-white text-black px-8 py-3 border border-white/20 rounded-full hover:bg-white/90  transition-colors"
            >
              Lets talk
            </Link>
            <Link
              href="mailto:satyaprakashray999@gmail.com"
              className="inline-block px-8 py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              Drop a mail
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-row gap-6 mt-8">
            <Link
              href="https://www.linkedin.com/in/satyaprakash-ray-9308aa1a1/"
              className="text-white/70 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://www.behance.net/satyaprakashray"
              className="text-white/70 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </Link>
            <Link
              href="https://dribbble.com/satyaprakash_ray"
              className="text-white/70 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/dribbble-icon.svg"
                alt="Dribbble"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.instagram.com/pixraydesigns"
              className="text-white/70 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
