import Image from "next/image";

export type Garment = "tee" | "hoodie" | "cap";

const shapes: Record<Garment, { path: string; logo: { x: number; y: number; w: number } }> = {
  tee: {
    path: "M70 40 L120 22 Q150 44 180 22 L230 40 L280 92 L246 124 L222 104 L222 268 Q150 280 78 268 L78 104 L54 124 L20 92 Z",
    logo: { x: 122, y: 86, w: 56 },
  },
  hoodie: {
    path: "M78 52 Q100 8 150 8 Q200 8 222 52 L272 86 L292 250 L262 256 L238 120 L234 272 Q150 286 66 272 L62 120 L38 256 L8 250 L28 86 Z M118 40 Q150 76 182 40 Q176 20 150 20 Q124 20 118 40 Z",
    logo: { x: 122, y: 98, w: 56 },
  },
  cap: {
    path: "M60 170 Q60 70 150 64 Q240 70 240 170 Z M40 170 L250 170 Q284 176 290 196 L44 196 Q30 184 40 170 Z",
    logo: { x: 128, y: 104, w: 44 },
  },
};

/** Ilustración de producto: prenda negra con la calavera Dbit. */
export default function ProductArt({ garment }: { garment: Garment }) {
  const { path, logo } = shapes[garment];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[260px]">
      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full drop-shadow-[0_18px_24px_rgba(0,0,0,0.18)]" aria-hidden>
        <defs>
          <linearGradient id={`fabric-${garment}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3a3a3c" />
            <stop offset="1" stopColor="#111" />
          </linearGradient>
        </defs>
        <path d={path} fill={`url(#fabric-${garment})`} fillRule="evenodd" />
      </svg>
      <Image
        src="/brand/dbit-mark.png"
        alt=""
        width={1080}
        height={1080}
        className="absolute invert"
        style={{ left: `${(logo.x / 300) * 100}%`, top: `${(logo.y / 300) * 100}%`, width: `${(logo.w / 300) * 100}%` }}
      />
    </div>
  );
}
