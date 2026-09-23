import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Project, PROJECTS } from "../constants";

const MONTHS: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

function parseYearField(value: string): number {
  const lower = value.toLowerCase();
  const year = parseInt(lower.match(/\d{4}/)?.[0] ?? "9999");
  const month =
    Object.entries(MONTHS).find(([name]) => lower.includes(name))?.[1] ?? 0;
  return year * 100 + month;
}

const SORTED_PROJECTS = [...PROJECTS].sort(
  (a, b) => parseYearField(a.workTime) - parseYearField(b.workTime),
);

function ProjectCard({ Project }: { Project: Project }) {
  const hasLink = Boolean(Project.linkProject);

  return (
    <a
      href={Project.linkProject}
      target={hasLink ? "_blank" : undefined}
      rel={hasLink ? "noopener noreferrer" : undefined}
      className={`flex flex-col overflow-hidden border border-white/5 bg-background floating-card group ${
        hasLink ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Preview: tela do site */}
      <div className="flex flex-col border-b border-white/5 bg-[#0A0A0A]">
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/2 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          {hasLink && (
            <span className="ml-2 truncate font-mono text-[10px] text-neutral-500">
              {Project.linkProject?.replace(/^https?:\/\//, "")}
            </span>
          )}
        </div>
        <div className="relative aspect-video overflow-hidden">
          {hasLink ? (
            <>
              <iframe
                src={Project.linkProject}
                title={Project.field}
                loading="lazy"
                tabIndex={-1}
                className="absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
              />
              {/* Camada que evita interacao com o iframe (preview) */}
              <div className="absolute inset-0" aria-hidden="true" />
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-linear-to-br from-orange-500/5 to-transparent text-neutral-700 transition-colors group-hover:text-orange-500/40">
              <Project.logoProject className="h-12 w-12" strokeWidth={1} />
            </div>
          )}
        </div>
      </div>

      {/* Informacoes */}
      <div className="flex flex-col p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center border border-white/10 bg-[#0A0A0A] text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
          <Project.logoProject className="h-5 w-5" />
        </div>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-500">
          {Project.workTime}
        </span>
        <h3 className="mb-3 text-xl font-medium text-white">{Project.field}</h3>
        <p className="text-sm font-light text-neutral-400">
          {Project.description}
        </p>
      </div>
    </a>
  );
}

function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const total = projects.length;
  // Renderiza 3 copias para simular o loop infinito.
  const loop = [...projects, ...projects, ...projects];

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Indice na lista triplicada; comeca no primeiro item da copia do meio.
  const [active, setActive] = useState(total);
  // Controla se a troca deve ser animada (falso durante o salto do loop).
  const [animate, setAnimate] = useState(false);
  const [offset, setOffset] = useState(0);

  // Centraliza o card ativo dentro da viewport.
  const measure = useCallback(() => {
    const vp = viewportRef.current;
    const card = trackRef.current?.children[active] as HTMLElement | undefined;
    if (!vp || !card) return;
    setOffset(vp.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2));
  }, [active]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  // Reabilita a transicao apos um salto silencioso do loop.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const go = (dir: number) => {
    setAnimate(true);
    setActive((a) => a + dir);
  };

  const goToReal = (i: number) => {
    setAnimate(true);
    setActive((a) => a - (((a % total) + total) % total) + i);
  };

  // Ao terminar o deslize, reposiciona para a copia do meio sem animar.
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (total <= 1) return;
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (active < total) {
      setAnimate(false);
      setActive((a) => a + total);
    } else if (active >= total * 2) {
      setAnimate(false);
      setActive((a) => a - total);
    }
  };

  // Navegacao por teclado.
  useEffect(() => {
    if (total <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const realIndex = ((active % total) + total) % total;

  if (total <= 1) {
    return (
      <div className="mx-auto w-[85vw] max-w-160" data-aos="fade-up">
        {total === 1 && <ProjectCard Project={projects[0]} />}
      </div>
    );
  }

  return (
    <div className="relative" data-aos="fade-up">
      <div ref={viewportRef} className="overflow-hidden">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="relative flex items-center gap-6"
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
            transition: animate ? "transform 500ms ease-out" : "none",
          }}
        >
          {loop.map((item, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    setAnimate(true);
                    setActive(i);
                  }
                }}
                className={`w-[85vw] max-w-160 shrink-0 transition-[transform,opacity] duration-300 ease-out ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-90 cursor-pointer opacity-40 hover:opacity-60"
                }`}
              >
                <ProjectCard Project={item} />
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous project"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition-colors hover:border-orange-500 hover:text-orange-500 lg:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next project"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition-colors hover:border-orange-500 hover:text-orange-500 lg:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to project ${i + 1}`}
            onClick={() => goToReal(i)}
            className={`h-2 rounded-full transition-all ${
              i === realIndex
                ? "w-6 bg-orange-500"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="Projects"
      className="py-24 border-t border-white/5 bg-[#0A0A0A] relative z-20"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-360">
        <div className="flex items-end gap-4 mb-16" data-aos="fade-right">
          <h2 className="text-4xl text-white font-medium">Projects</h2>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1.5">
            just a few projects I'm proud to have done!
          </span>
        </div>

        <ProjectsCarousel projects={SORTED_PROJECTS} />
      </div>
    </section>
  );
}
