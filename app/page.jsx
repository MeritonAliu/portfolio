'use client';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';

export default function Home() {

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