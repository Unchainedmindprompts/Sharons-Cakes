/* Pinned-on-paper sticker label that sits above section
   headings. Rotates a touch, casts the hard sticker shadow. */
export default function Eyebrow({
  children,
  color = "bg-yolk",
  rotate = "-rotate-2",
}: {
  children: React.ReactNode;
  color?: string;
  rotate?: string;
}) {
  return (
    <span
      className={`sticker-shadow-sm inline-block rounded-full border-2 border-choco px-4 py-1 font-display text-sm text-choco ${color} ${rotate}`}
    >
      {children}
    </span>
  );
}
