import { Icon } from "@iconify/react";
import { QUOTES } from "../constants";

const DOT_BG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ5LCAxMTUsIDIyLCAwLjA1KSIvPjwvc3ZnPg==";

export function Citacoes() {
  return (
    <section
      id="citacoes"
      className="py-32 border-t border-white/5 bg-background relative z-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50 z-0"
        style={{ backgroundImage: `url('${DOT_BG}')` }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-360 relative z-10 text-center">
        <Icon
          icon="solar:quote-right-bold-duotone"
          className="text-6xl text-white/10 mb-8 mx-auto"
          data-aos="fade-down"
        />

        <div className="max-w-4xl mx-auto space-y-20">
          {QUOTES.map((quote, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 200}>
              <h2 className="text-3xl md:text-5xl text-white font-light tracking-tight leading-tight italic">
                {quote}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
