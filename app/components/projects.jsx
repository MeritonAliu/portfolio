
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {

  return (
    <div id='projects' className="projects">
      <h1 className='subpage-title'>My projects</h1>
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
  );
}