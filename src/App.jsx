import Header from './components/Header';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <ContentSections />
      </main>
      <Footer />
    </div>
  );
}
