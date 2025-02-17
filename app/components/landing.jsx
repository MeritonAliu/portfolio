import Link from 'next/link'
import Image from 'next/image';
import Transition from './transition';
import gear from './../../public/icons8-gear.svg';

export default function Landing() {

  return (
    <div id='landing' className="landing">
      <h1 className='typewriter subpage-title'>Meriton Aliu</h1>
      <Transition>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link href="/privacy-policy">
            <button style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
              View Privacy Policy
            </button>
          </Link>
        </div>
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
          <Link className="btn" href="/#contact">
            Email
          </Link>
        </div>
      </Transition>
    </div>
  );
}