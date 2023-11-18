import "./about.css";
const About = () => {
  return (
    <>
      <div className="about__container">
        <div className="about__section">
          <div className="about__left-side">
            <div className="about__titles">
              <div className="about__title">ABOUT</div>
              <div className="about__subtitle">who is tony stark?</div>
            </div>
            <div className="about__introduction">
              <div className="about__intro-01">
                <p>
                  Tony Stark, the man behind the mask of Iron Man, epitomizes
                  brilliance, innovation, and courage. As a visionary inventor
                  and billionaire, Stark transformed himself into a superhero
                  armed with groundbreaking technology and a fierce
                  determination to defend humanity.
                </p>
              </div>
              <div className="about__intro-02">
                <p>
                  His journey from a wealthy industrialist to a selfless
                  protector showcases a blend of genius, resilience, and a deep
                  sense of responsibility to make the world a safer place.
                </p>
              </div>
            </div>
          </div>
          <div className="about__middle">
            <div className="about__left-3dmodel"></div>
          </div>
          <div className="about__right-side"></div>
        </div>
      </div>
    </>
  );
};

export default About;
