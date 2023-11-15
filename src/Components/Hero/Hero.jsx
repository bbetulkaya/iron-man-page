import "./hero.css";
import Spline from "@splinetool/react-spline";
const Hero = () => {
  return (
    <>
      <div className="hero__section">
        <div className="hero__title">IRON MAN</div>
        <div className="hero__subtitle">
          <div className="hero__scroll-text">
            <div className="hero__scroll-text-r">
              <span>Genius</span>
              <span>Billionaire</span>
              <span>Playboy</span>
              <span>Philanthropist</span>
            </div>
            <div className="hero__scroll-text-r">
              <span>Genius</span>
              <span>Billionaire</span>
              <span>Playboy</span>
              <span>Philanthropist</span>
            </div>
          </div>
          <div className="hero__scroll-text">
            <div className="hero__scroll-text-l">
              <span>Genius</span>
              <span>Billionaire</span>
              <span>Playboy</span>
              <span>Philanthropist</span>
            </div>
            <div className="hero__scroll-text-l">
              <span>Genius</span>
              <span>Billionaire</span>
              <span>Playboy</span>
              <span>Philanthropist</span>
            </div>
          </div>
        </div>

        <div className="hero__3d-model">
          {/* <Spline scene="https://prod.spline.design/GT4jBQ9h1fDLvOnR/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/zeAN-XyTglLk2UIs/scene.splinecode" />
        </div>
      </div>

      <div className="hero__scroll"></div>
    </>
  );
};

export default Hero;
