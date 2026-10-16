import type { CakeArtKind } from "@/lib/content";

/* Decorative line-art cake illustrations. These are deliberately
   illustrations, NOT photos — real photos of Sharon's cakes swap
   in per-card (see the `photo` field in lib/content.ts). */

const CHOCO = "#2e1a0e";
const CREAM = "#fff6ea";
const CREAM_DEEP = "#fdeeda";
const PINK = "#e5267e";
const TEAL = "#0fa3a3";
const YOLK = "#ffc531";
const ORANGE = "#f59e0b";

const stroke = {
  stroke: CHOCO,
  strokeWidth: 3.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Cupcake({
  cx,
  top,
  frosting,
}: {
  cx: number;
  top: number;
  frosting: string;
}) {
  const base = top + 62;
  return (
    <g {...stroke}>
      {/* frosting */}
      <path
        d={`M ${cx - 25} ${top + 30} C ${cx - 25} ${top + 8}, ${cx - 10} ${top + 2}, ${cx} ${top + 2} C ${cx + 10} ${top + 2}, ${cx + 25} ${top + 8}, ${cx + 25} ${top + 30} Z`}
        fill={frosting}
      />
      <path
        d={`M ${cx - 13} ${top + 6} C ${cx - 13} ${top - 6}, ${cx - 4} ${top - 10}, ${cx} ${top - 10} C ${cx + 5} ${top - 10}, ${cx + 13} ${top - 6}, ${cx + 13} ${top + 6} Z`}
        fill={frosting}
      />
      <circle cx={cx} cy={top - 16} r={6} fill={PINK} />
      {/* sprinkles */}
      <path d={`M ${cx - 14} ${top + 16} l 5 3 M ${cx + 6} ${top + 12} l 5 3 M ${cx - 2} ${top + 22} l 5 3`} fill="none" />
      {/* wrapper */}
      <path
        d={`M ${cx - 23} ${top + 32} L ${cx + 23} ${top + 32} L ${cx + 16} ${base} L ${cx - 16} ${base} Z`}
        fill={CREAM_DEEP}
      />
      <path
        d={`M ${cx - 8} ${top + 32} L ${cx - 5.5} ${base} M ${cx} ${top + 32} L ${cx} ${base} M ${cx + 8} ${top + 32} L ${cx + 5.5} ${base}`}
        fill="none"
      />
    </g>
  );
}

function Cupcakes() {
  return (
    <>
      <Cupcake cx={42} top={72} frosting={TEAL} />
      <Cupcake cx={100} top={58} frosting={PINK} />
      <Cupcake cx={158} top={72} frosting={YOLK} />
      <path d="M 12 148 H 188" {...stroke} fill="none" />
    </>
  );
}

function LayerCake() {
  return (
    <g {...stroke}>
      {/* candles */}
      <path d="M 82 22 V 38 M 100 16 V 38 M 118 22 V 38" fill="none" />
      <path d="M 100 4 c 5 6 5 10 0 14 c -5 -4 -5 -8 0 -14 Z" fill={YOLK} />
      <path d="M 82 10 c 4 5 4 8 0 12 c -4 -4 -4 -7 0 -12 Z" fill={YOLK} />
      <path d="M 118 10 c 4 5 4 8 0 12 c -4 -4 -4 -7 0 -12 Z" fill={YOLK} />
      {/* tiers */}
      <rect x={72} y={38} width={56} height={28} rx={6} fill={CREAM} />
      <rect x={58} y={66} width={84} height={30} rx={6} fill={CREAM_DEEP} />
      <rect x={42} y={96} width={116} height={36} rx={6} fill={CREAM} />
      {/* ganache drip on the bottom tier */}
      <path
        d="M 48 108 q 7 9 14 0 t 14 0 t 14 0 t 14 0 t 14 0 t 14 0 t 14 0"
        fill="none"
        stroke={PINK}
      />
      {/* cherries on the middle tier */}
      <circle cx={78} cy={81} r={5} fill={PINK} />
      <circle cx={100} cy={81} r={5} fill={PINK} />
      <circle cx={122} cy={81} r={5} fill={PINK} />
      {/* plate */}
      <path d="M 22 146 H 178 M 70 146 l -6 10 M 130 146 l 6 10" fill="none" />
    </g>
  );
}

function RevealCake() {
  return (
    <g {...stroke}>
      {/* bunting */}
      <path d="M 28 44 Q 100 18 172 44" fill="none" />
      <polygon points="44,38 58,34 52,50" fill={PINK} />
      <polygon points="72,31 86,29 80,45" fill={TEAL} />
      <polygon points="100,28 114,29 107,45" fill={YOLK} />
      <polygon points="128,31 142,34 135,50" fill={PINK} />
      {/* cake */}
      <rect x={48} y={66} width={104} height={68} rx={8} fill={CREAM} />
      <path d="M 48 74 a 8 8 0 0 1 8 -8 h 44 v 16 h -52 Z" fill={PINK} />
      <path d="M 100 66 h 44 a 8 8 0 0 1 8 8 v 8 h -52 Z" fill={TEAL} />
      <text
        x={100}
        y={122}
        textAnchor="middle"
        fontSize={44}
        fill={CHOCO}
        stroke="none"
        style={{ fontFamily: "var(--font-shrikhand), sans-serif" }}
      >
        ?
      </text>
      {/* stand */}
      <path d="M 30 146 H 170 M 100 134 v 12" fill="none" />
    </g>
  );
}

function BridalCake() {
  return (
    <g {...stroke}>
      {/* rings */}
      <circle cx={90} cy={30} r={12} fill="none" stroke={YOLK} strokeWidth={4} />
      <circle cx={110} cy={30} r={12} fill="none" stroke={YOLK} strokeWidth={4} />
      <polygon points="90,10 95,17 90,22 85,17" fill={TEAL} />
      {/* tiers */}
      <rect x={78} y={46} width={44} height={26} rx={5} fill={CREAM} />
      <rect x={64} y={72} width={72} height={28} rx={5} fill={CREAM_DEEP} />
      <rect x={50} y={100} width={100} height={32} rx={5} fill={CREAM} />
      <path d="M 52 126 H 148 M 66 94 H 134 M 80 66 H 120" fill="none" stroke={YOLK} />
      {/* flowers */}
      {[
        { cx: 62, cy: 112 },
        { cx: 138, cy: 84 },
        { cx: 88, cy: 58 },
      ].map((f) => (
        <g key={`${f.cx}-${f.cy}`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <circle
              key={a}
              cx={f.cx + 6 * Math.cos((a * Math.PI) / 180)}
              cy={f.cy + 6 * Math.sin((a * Math.PI) / 180)}
              r={3.6}
              fill={PINK}
            />
          ))}
          <circle cx={f.cx} cy={f.cy} r={3} fill={YOLK} />
        </g>
      ))}
      {/* plate */}
      <path d="M 26 146 H 174" fill="none" />
    </g>
  );
}

function FallCake() {
  return (
    <g {...stroke}>
      {/* pumpkin */}
      <ellipse cx={100} cy={56} rx={24} ry={17} fill={ORANGE} />
      <path d="M 88 42 c -6 8 -6 20 0 28 M 112 42 c 6 8 6 20 0 28" fill="none" />
      <path d="M 96 40 q 4 -10 12 -10" fill="none" />
      <rect x={96} y={32} width={8} height={9} rx={2} fill={CHOCO} />
      {/* cake */}
      <rect x={52} y={78} width={96} height={58} rx={8} fill={CREAM} />
      <path
        d="M 52 86 a 8 8 0 0 1 8 -8 h 80 a 8 8 0 0 1 8 8 v 6 c -8 8 -14 -2 -22 2 c -8 10 -16 -2 -24 0 c -8 8 -16 -2 -24 -2 c -8 6 -16 0 -26 -2 Z"
        fill={YOLK}
      />
      {/* leaves */}
      <path d="M 66 118 q 10 -12 20 -4 q -8 12 -20 4 Z" fill={TEAL} />
      <path d="M 116 122 q 10 -12 20 -4 q -8 12 -20 4 Z" fill={PINK} />
      <path d="M 24 146 H 176" fill="none" />
    </g>
  );
}

function CupcakeTray() {
  const cells = [
    { cx: 58, cy: 84, f: PINK },
    { cx: 100, cy: 84, f: YOLK },
    { cx: 142, cy: 84, f: TEAL },
    { cx: 58, cy: 124, f: TEAL },
    { cx: 100, cy: 124, f: PINK },
    { cx: 142, cy: 124, f: YOLK },
  ];
  return (
    <g {...stroke}>
      <rect x={24} y={50} width={152} height={96} rx={12} fill={CREAM_DEEP} />
      <rect x={14} y={88} width={10} height={18} rx={4} fill={CREAM} />
      <rect x={176} y={88} width={10} height={18} rx={4} fill={CREAM} />
      {cells.map((c) => (
        <g key={`${c.cx}-${c.cy}`}>
          <path
            d={`M ${c.cx - 14} ${c.cy} C ${c.cx - 14} ${c.cy - 15}, ${c.cx + 14} ${c.cy - 15}, ${c.cx + 14} ${c.cy} Z`}
            fill={c.f}
          />
          <path
            d={`M ${c.cx - 13} ${c.cy + 2} L ${c.cx + 13} ${c.cy + 2} L ${c.cx + 9} ${c.cy + 17} L ${c.cx - 9} ${c.cy + 17} Z`}
            fill={CREAM}
          />
        </g>
      ))}
    </g>
  );
}

const ART: Record<CakeArtKind, () => React.ReactElement> = {
  cupcakes: Cupcakes,
  "layer-cake": LayerCake,
  "reveal-cake": RevealCake,
  "bridal-cake": BridalCake,
  "fall-cake": FallCake,
  "cupcake-tray": CupcakeTray,
};

export default function CakeArt({
  kind,
  className,
}: {
  kind: CakeArtKind;
  className?: string;
}) {
  const Art = ART[kind];
  return (
    <svg
      viewBox="0 0 200 170"
      className={className}
      role="img"
      aria-label="Decorative cake illustration"
    >
      <Art />
    </svg>
  );
}
