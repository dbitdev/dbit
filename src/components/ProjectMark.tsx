import Image from "next/image";
import type { Project } from "@/lib/projects";

/** Ícono tipo app: el logo del proyecto o, si no hay, su inicial sobre su gradiente. */
export default function ProjectMark({ project, size = 56 }: { project: Project; size?: number }) {
  const [a, b] = project.hue;
  const radius = size * 0.2237;

  if (project.logo) {
    const { src, fill } = project.logo;
    return (
      <div
        aria-hidden
        className="relative shrink-0 overflow-hidden bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
        style={{ width: size, height: size, borderRadius: radius }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes={`${size * 2}px`}
          className={fill ? "object-cover" : "object-contain"}
          style={fill ? undefined : { padding: size * 0.16 }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(135deg, ${a}, ${b})`,
        fontSize: size * 0.46,
        letterSpacing: "-0.03em",
      }}
    >
      {project.name.charAt(0)}
    </div>
  );
}
