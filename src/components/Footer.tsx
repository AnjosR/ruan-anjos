import { Icon } from "@iconify/react";
import { SOCIAL_LINKS } from "../constants";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#030303]">
      <div className="container mx-auto px-6 lg:px-12 max-w-360 flex items-center justify-between">
        <span className="text-sm font-mono text-neutral-500">
          <span className="text-orange-500/70">&lt;/&gt;</span> Developed by Ruan Anjos
        </span>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-orange-500 transition-colors duration-300 text-2xl"
            >
              <Icon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
