import heroImg from "../assets/ruan-sorrindo.png";
import { TYPED_STRINGS } from "../constants";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Typed from "typed.js";
import { gsap } from "gsap";

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    if (!heroTextRef.current || !heroImageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(heroTextRef.current!.children, {
        y: 30,
        opacity: 0,
        filter: "blur(5px)",
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(heroImageRef.current!, {
        x: 50,
        opacity: 0,
        rotationY: 15,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document
        .querySelectorAll<HTMLElement>("#hero .floating-card")
        .forEach((card) => {
          const base = parseFloat(card.dataset.rotation ?? "0");
          card.style.transform = `rotate(${base}deg) translateY(${scrollY * 0.1}px)`;
        });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute inset-0 bg-linear-to-tr from-orange-500/20 to-transparent rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text */}
        <div
          ref={heroTextRef}
          className="lg:col-span-7 flex flex-col justify-center z-20 relative mt-12 lg:mt-0"
        >
          <span className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-70 h-px bg-orange-500"></span>
          </span>

          <h1 className="text-6xl lg:text-[8rem] leading-[0.85] uppercase font-medium text-white tracking-tighter mb-4 relative z-10">
            <span className=" absolute -top-16 -left-12 text-[10rem] lg:text-[14rem] text-white/2 -z-10 pointer-events-none select-none tracking-tight">
              Ruan
            </span>
            Ruan
            <br />
            <span className="text-neutral-500">Anjos</span>
          </h1>

          <div className="h-16 lg:h-20 mb-8 flex items-center">
            <span
              ref={typedRef}
              className="text-2xl lg:text-4xl font-bold bg-linear-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg"
            />
          </div>

          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-12 font-light border-l-2 border-white/10 pl-6">
            Translating messy requirements into slick web apps. Full Stack Dev
            obsessed with Clean Architecture.
          </p>
        </div>

        {/* Image Composition */}
        <div
          ref={heroImageRef}
          className="lg:col-span-5 relative flex items-center justify-center perspective-distant h-137.5 lg:h-175 mt-16 lg:mt-0"
        >
          {/* Main card */}
          <div
            className="relative z-20 w-full max-w-[20rem] lg:max-w-[24rem] aspect-3/4 bg-surface border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] floating-card"
            data-rotation="3"
            style={{ transform: "rotate(3deg)" }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={heroImg}
              alt="Ruan Anjos"
              className="w-full h-full object-cover cinematic-photo"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/600x800?text=Ruan+Anjos";
              }}
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 flex items-center gap-3 shadow-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#F97316]" />
                <span className="text-xs font-mono uppercase text-white tracking-widest font-semibold">The Architect</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20 text-[10px] font-mono text-white/30 text-right leading-tight">
              SYS.ON
              <br />
              ID: RA-01
              <br />
              <span className="text-orange-500/50">///</span>
            </div>
          </div>

          {/* Floating back element */}
          <div
            className="absolute top-[5%] left-[-15%] lg:left-[-10%] z-10 w-32 lg:w-48 aspect-square bg-neutral-900 border border-white/5 shadow-2xl floating-card opacity-80 backdrop-blur-sm flex items-center justify-center"
            data-rotation="-10"
            style={{ transform: "rotate(-10deg)" }}
          >
            <Icon
              icon="solar:code-square-bold-duotone"
              className="text-5xl lg:text-7xl text-neutral-700"
            />
          </div>

          {/* Floating front element */}
          <div
            className="absolute bottom-[10%] right-[-10%] lg:right-[-5%] z-30 w-36 lg:w-44 aspect-4/3 bg-black/90 border border-white/10 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.15)] floating-card backdrop-blur-xl flex flex-col items-center justify-center p-4"
            data-rotation="8"
            style={{ transform: "rotate(8deg)" }}
          >
            <span className="text-orange-500 text-3xl lg:text-4xl font-light mb-1">
              ∞
            </span>
            <span className="text-[8px] lg:text-[9px] font-mono text-neutral-400 uppercase tracking-widest text-center">
              Infinite
              <br />
              Impact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
