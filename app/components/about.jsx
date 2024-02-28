
export default function About() {
  return (

    <div id='about' className="about">
      <div className="subpage-title">
        <h1>About me</h1>
      </div>
      <div className="about-divider">
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
        <div className="contactme">
          <p>Contact me</p>
        </div>
      </div>
    </div>
  );
}
