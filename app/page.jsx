import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="landing">
        <h1 className='typewriter'>Meriton Aliu</h1>
        <p className="p-description">a young <span className='span-p-description'>aspiring</span> <br /> engineer and developer</p>
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

        <div className="about-p-container">
          <div className="about-p-child">
            <p className="about-p-title">My <span className='span-p-description'>person</span> <br /></p>
            <p>
              I am 20 years young <br />
              I am based in Switzerland, Zürich <br />
            </p>
          </div>

          <div className="about-p-child">
            <p className="about-p-title">My current <span className='span-p-description'>situation</span> <br /></p>
            <p>
              Trained electronics engineer EFZ at Bruke Switzerland AG
              Currently absolving the technical vocational baccalaureate. <br />
              My next goal is to start the bachelors degree in computer science at the ZHAW in Zürich. <br />
            </p>
          </div>
          <div className="about-p-child">
            <p className="about-p-title">What i <span className='span-p-description'>like</span> <br /></p>
            <p>
              - engineeering and development <br />
              - indie games <br />
              - history and geography <br />
              - art and music <br />
            </p>
          </div>
        </div>

      </div>
      <div className="projects">
        <h1>My projects</h1>
      </div>
    </main>
  );
}