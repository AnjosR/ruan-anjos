import { Icon } from "@iconify/react";

interface AnimatedButtonProps {
  label: string;
  icon?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const DOT_BG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjQ5LCAxMTUsIDIyLCAwLjIpIi8+PC9zdmc+";

export function AnimatedButton({
  label,
  icon,
  href = "#",
  onClick,
  fullWidth,
  type,
}: AnimatedButtonProps) {
  const inner = (
    <span className="flex items-center justify-center gap-3 font-medium uppercase tracking-wider text-sm relative z-10 transition-colors duration-300 group-hover:text-black text-white">
      {label}
      {icon && <Icon icon={icon} className="text-lg" />}
    </span>
  );

  const className = `group relative inline-flex justify-center items-center p-4 border border-neutral-800 hover:border-orange-500 transition-colors duration-300 overflow-hidden${fullWidth ? " w-full" : ""}`;

  const decorations = (
    <>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: `url('${DOT_BG}')` }}
      />
      <div className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
    </>
  );

  if (type) {
    return (
      <button type={type} className={className} onClick={onClick}>
        {decorations}
        {inner}
      </button>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {decorations}
      {inner}
    </a>
  );
}
