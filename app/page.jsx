'use client';

import Link from 'next/link'
import Image from 'next/image';
import Transition from './components/transition';
import gear from './../public/icons8-gear.svg';

export default function Home() {

  return (
    <main>
      <div className="landing">
        <h1 className='typewriter'>Meriton Aliu</h1>
        <Transition>

          <div className="headline">
            <p className="p-description">a young <span className='span-p-description'>aspiring</span> <br /> engineer and developer</p>
            <div className="gear-container">
              <Image className="gear" src={gear} alt="gear" height={500} width={500} />
            </div>
          </div>
          <div className="btn-container">
            <Link className="btn" href="https://github.com/MeritonAliu/">
              GitHub
            </Link>
            <Link className="btn" href="https://ch.linkedin.com/in/meriton-aliu-44a595252">
              Linkedin
            </Link>
          </div>
        </Transition>
        <Link href="#about" className="p-scroll">
          scroll down for more
        </Link>
      </div>
      <div id='about' className="about">
        <div className="titles">
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
              Trained electronics engineer EFZ at Bruker Switzerland AG
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
      <div id='projects' className="projects">
        <h1 className='titles'>My projects</h1>
        <div className='projects-container'>
          <Link href="https://github.com/MeritonAliu/weatherio">
            <div className="proj">
              <h1 className="proj-title">
                weatherio
              </h1>
              <Image className='project-images' src={"/weatherio.png"} width={500} height={500} alt='weatherio' loading='lazy' />
              <p className="project-description">
                A simple weather app that uses the OpenWeatherMap API to get the weather of a city.
              </p>
            </div>
          </Link>
          <Link href="https://github.com/MeritonAliu/efm32core">
            <div className="proj">
              <h1 className="proj-title">
                efm32core
              </h1>
              <Image className='project-images' src={"/efm32core.jpg"} width={500} height={500} alt='"Embedded World 2016, EFM32 Happy Gecko" by Ordercrazy is marked with CC0 1.0. ' loading='lazy' />
              <p className="project-description">
                This projects provides a core library for the EFM32ZG mikrocontroller. Display, I2C TMP100, GPIO, Timer
              </p>
            </div>
          </Link>
          <Link href="https://github.com/MeritonAliu/activfilter">
            <div className="proj">
              <h1 className="proj-title">
                activfilter
              </h1>
              <Image className='project-images' src={"/activfilter.png"} width={500} height={500} alt='"High-Pass filter Bode Magnitude and Phase plots" by User:Brews_ohare is marked with CC0 1.0. ' loading='lazy' />
              <p className="project-description">
                Simulation of electronic activ filter in c#
              </p>
            </div>
          </Link>
          <Link href="https://github.com/MeritonAliu/blockchain-py">
            <div className="proj">
              <h1 className="proj-title">
                blockchain-py
              </h1>
              <Image className='project-images' src={"/blockchain-py.png"} width={500} height={500} alt='"High-Pass filter Bode Magnitude and Phase plots" by User:Brews_ohare is marked with CC0 1.0. ' loading='lazy' />
              <p className="project-description">
                blockchain example with pyhton
              </p>
            </div>
          </Link>
        </div>
      </div>
      <footer>
        <h1>Currently under <span className='span-p-description'>contruction</span></h1>
      </footer>
    </main>
  );
}