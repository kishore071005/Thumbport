import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThumbnailGallery from './components/ThumbnailGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg-dark text-text-white min-h-screen font-sans selection:bg-accent-orange/30 selection:text-text-white antialiased">
      <Navbar />
      <Hero />
      <main>
        <ThumbnailGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
