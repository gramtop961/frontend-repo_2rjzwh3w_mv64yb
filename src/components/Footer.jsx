import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-emerald-500" />
              vseggerding.at
            </div>
            <p className="mt-3 text-sm text-slate-600">
              A refreshed interface presenting the same information with improved clarity, accessibility, and performance.
            </p>
          </div>
          <div>
            <div className="font-medium text-slate-900">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" /> Replace with your address</li>
              <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5" /> +43 000 000000</li>
              <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5" /> info@vseggerding.at</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-slate-900">Quick links</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a className="hover:text-slate-900" href="#home">Home</a></li>
              <li><a className="hover:text-slate-900" href="#about">About</a></li>
              <li><a className="hover:text-slate-900" href="#news">News</a></li>
              <li><a className="hover:text-slate-900" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} vseggerding.at. All rights reserved.</div>
      </div>
    </footer>
  );
}
