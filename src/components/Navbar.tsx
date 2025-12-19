import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-slate-950 sticky top-0 z-40 border-b border-white/5">
      <div className="mx-auto max-w-6xl p-4 flex items-center justify-between text-2xl">
        <a href="#" className="flex items-center gap-2">
          <span className="font-bold tracking-tight">My portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-fuchsia-300 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="size-5 cursor-pointer" />
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
            <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">My brand</span>
                </div>
                <button
                  className="p-2 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5 cursor-pointer" />
                </button>
              </div>
              <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-200"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
