import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Modern refresh — same content, cleaner look
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              A clean, modern redesign of your website
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              All your existing pages and information presented with clearer typography, better spacing, and a mobile-first layout. This scaffold keeps sections for home, news, about, and contact — ready for your original content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#news"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white shadow-sm hover:bg-emerald-700 transition"
              >
                View latest updates <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="relative aspect-[4/3] w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-100/60 via-transparent to-emerald-200/60" />
              <div className="relative p-6">
                <h3 className="text-slate-900 font-medium">What’s improved</h3>
                <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                  <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" /> Crisp typography with ample whitespace</li>
                  <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" /> Accessible color contrast</li>
                  <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" /> Responsive navigation and sections</li>
                  <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" /> Performance-first, SEO-friendly structure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
