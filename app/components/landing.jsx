import Link from 'next/link'
import Image from 'next/image';
import Transition from './transition';
import gear from './../../public/icons8-gear.svg';

export default function Landing() {

  return (
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
  );
}