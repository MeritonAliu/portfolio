import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="landing">
        <h1 className='typewriter'>Meriton Aliu</h1>
        <p className="p-description">young aspiring engineer and developer</p>
        <div className="btn-container">
          <Link className="btn" href="https://github.com/MeritonAliu/">
            GitHub
          </Link>
          <Link className="btn" href="https://ch.linkedin.com/in/meriton-aliu-44a595252">
            Linkedin
          </Link>
        </div>
        <p className="p-scroll">scroll down for more</p>
      </div>
      <div className="about"> 
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-paragraph">
          <p>
            I am Meriton, a young aspiring engineer and developer, currently studying computer science at the University of Applied Sciences in Bern, Switzerland. I am passionate about technology and software development, and I am always looking for new challenges and opportunities to improve my skills.
          </p>
        </div>  
      </div>
      <div className="projects"> 
        <h1>My projects</h1>
      </div>
    </main>
  );
}