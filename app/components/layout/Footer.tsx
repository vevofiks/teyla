import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../../font";
import { ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "YouTube", href: "#", Icon: Youtube },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#081c15]">
      <div className="relative min-h-[60dvh] w-full overflow-hidden">
        <Image
          src="https://picsum.photos/seed/teyla-kerala-backwaters/1920/1200"
          alt="Kerala backwaters at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081c15]/80 via-[#081c15]/70 to-[#081c15]/95" />

        <div className="relative mx-auto flex min-h-[60dvh] max-w-[1400px] flex-col items-center justify-center gap-8 px-4 text-center md:gap-12 md:px-10 md:py-20">
          <Link
            href="#home"
            className="flex flex-col items-center gap-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
          >
            <Image
              src="/teyla-logo.png"
              alt="Teyla"
              width={120}
              height={120}
              className="h-20 w-20 brightness-0 invert md:h-28 md:w-28"
            />
            <span className={`${montserrat.className} text-2xl font-bold tracking-widest text-white uppercase`}>
              Teyla Trips
            </span>
          </Link>

          <div className="flex flex-col items-center">
            <h2 className={`${montserrat.className} text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl`}>
              Ready for the journey?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Let us craft a bespoke itinerary through the backwaters, hills, and beaches of Kerala — tailored exclusively for you.
            </p>
            <Link
              href="#packages"
              className="group mt-8 flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
            >
              Start Planning
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar — socials, legal links, copyright */}
      <div className="relative mx-auto flex max-w-[1400px] flex-col-reverse items-center gap-6 border-t border-white/10 px-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left md:px-10">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Teyla Trips. All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-emerald-400/40 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
