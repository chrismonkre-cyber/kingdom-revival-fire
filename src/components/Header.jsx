import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/6a1799f21028a2070730409c/629b904f8_newlogo.png";
const NAV = [
  { label: "Home", to: "/" },
  { label: "Daily", to: "/daily" },
  { label: "Revival", to: "/revival" },
  { label: "Journal", to: "/journal" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-yellow-700/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover" />
          <span className="font-heading text-yellow-300 text-sm md:text-base font-bold hidden sm:block drop-shadow-lg">Kingdom Revival Fire</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} className={`px-3 py-2 rounded-lg text-sm font-heading transition-colors ${pathname === n.to ? "bg-yellow-600/40 text-yellow-200" : "text-yellow-100/80 hover:bg-yellow-600/20 hover:text-yellow-200"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-yellow-300 p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-black/80 backdrop-blur-md border-t border-yellow-700/30 px-4 pb-4">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className={`block py-3 px-4 font-heading text-sm border-b border-yellow-900/30 ${pathname === n.to ? "text-yellow-300" : "text-yellow-100/70"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}