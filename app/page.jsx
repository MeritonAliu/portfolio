'use client';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';

export default function Home() {

  return (
    <main>
      <Landing />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}