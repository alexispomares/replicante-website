import Link from "next/link";

export default function EonLogo({
  white = false,
  className = "",
}: {
  white?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Replicante home"
      className={`transition-colors duration-500 ease-in-out hover:text-crystal-rose ${
        white ? "text-white" : "text-slate-900"
      } ${className}`}
    >
      <span className="font-display text-xl tracking-tight">Replicante</span>
    </Link>
  );
}
