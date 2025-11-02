import { useState } from 'react';
import { Menu, X, Home, Info, Calendar, Mail } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: Info },
  { href: '#news', label: 'News', icon: Calendar },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-emerald-500" />
            <span className="tracking-tight">vseggerding.at</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-2 grid">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
