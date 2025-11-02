import { Calendar, Info, Newspaper } from 'lucide-react';

export default function ContentSections() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-24">
      <About />
      <News />
      <Events />
    </section>
  );
}

function Section({ id, icon: Icon, title, children }) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
          <Icon size={20} />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" icon={Info} title="About">
      <div className="prose prose-slate max-w-none">
        <p>
          This section is reserved for the original About content from your website. Bring over your mission, background, and key information. The layout emphasizes readability and a calm, modern aesthetic.
        </p>
        <ul>
          <li>Clear hierarchy with headings and paragraphs</li>
          <li>Comfortable line length for easy reading</li>
          <li>Responsive design for phones, tablets, and desktops</li>
        </ul>
      </div>
    </Section>
  );
}

function News() {
  return (
    <Section id="news" icon={Newspaper} title="News & Updates">
      <div className="grid gap-4 sm:grid-cols-2">
        <ArticleCard
          title="Sample: New announcement"
          date="2025-01-15"
          excerpt="Replace this with your latest post or update. Cards keep information scannable and consistent."
        />
        <ArticleCard
          title="Sample: Important information"
          date="2025-01-02"
          excerpt="Use as many cards as needed. Older items can be archived or linked to a details page."
        />
      </div>
    </Section>
  );
}

function Events() {
  return (
    <Section id="events" icon={Calendar} title="Events">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: 'Open Day', date: 'March 12, 2025', location: 'Main Campus' },
          { title: 'Parent Meeting', date: 'April 4, 2025', location: 'Auditorium' },
          { title: 'Summer Break', date: 'July 1, 2025', location: '—' },
        ].map((e) => (
          <div key={e.title} className="rounded-lg border border-slate-200 p-4">
            <div className="text-sm text-slate-500">{e.date}</div>
            <div className="mt-1 font-medium text-slate-900">{e.title}</div>
            <div className="text-sm text-slate-600">{e.location}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ArticleCard({ title, date, excerpt }) {
  return (
    <article className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition">
      <div className="text-xs font-medium text-emerald-700">{new Date(date).toLocaleDateString()}</div>
      <h3 className="mt-1 text-slate-900 font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{excerpt}</p>
    </article>
  );
}
