'use client';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';
import useViewportHeight from './hooks/useViewportHeight';

export default function Home() {
  useViewportHeight();
  
  return (
    <main>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}