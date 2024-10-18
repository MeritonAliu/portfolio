'use client';
import Landing from './components/landing';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';

export default function Home() {

  return (
    <main>
      <Landing />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}