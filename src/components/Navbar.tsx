import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-slate-950 sticky top-0 z-40 border-b border-white/5">
      <div className="mx-auto max-w-6xl p-4 flex items-center justify-between text-2xs">
        <a href="#" className="flex items-center gap-2">
          <span className="font-bold tracking-tight">My portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative
              after:absolute after:left-0 after:-bottom-1
              after:h-0.5 after:w-0
              after:bg-fuchsia-300
              after:transition-all after:duration-300
              hover:after:w-full hover:text-fuchsia-300"
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
                  <span className="font-semibold">My portfolio</span>
                </div>
                <button
                  className="p-2 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5 cursor-pointer" />
                </button>
              </div>
              <div className="flex flex-col gap-4 bg-slate-900 p-4 w-full">
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
