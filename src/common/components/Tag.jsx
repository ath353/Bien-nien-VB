export default function Tag({ label }) {
  return (
    <span className="inline-block rounded-sm border border-amber-900/50 bg-amber-950/30 px-2 py-0.5 text-xs text-amber-500 font-medium tracking-wide">
      {label}
    </span>
  );
}
