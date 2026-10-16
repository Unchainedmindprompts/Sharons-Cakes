/* Scalloped section edge: a row of crisp semicircles in the
   color of the section BELOW, bumping up into the section
   above. Rendered with a repeating radial-gradient (see
   .scallop-up in globals.css), so the scallops stay perfectly
   round at any screen width. Set the color with a text-*
   class; the strip itself is transparent. */
export default function ScallopDivider({
  className = "",
}: {
  className?: string;
}) {
  return <div aria-hidden="true" className={`scallop-up ${className}`} />;
}
