import { Link } from "react-router-dom";
import { MdOutlineSportsMartialArts } from "react-icons/md";

export function Navegation() {
  return (
    <nav className="w-full bg-white shadow-md rounded-md mb-6">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        
        {/* Logo + nombre */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-red-700 hover:text-red-900 transition"
        >
          <MdOutlineSportsMartialArts size={28} />
          <span>Academia Chang Hun</span>
        </Link>
        </div>
    </nav>
  );
}
