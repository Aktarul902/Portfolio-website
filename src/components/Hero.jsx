import Floating3D from "./Floating3D";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />

      <div className="hero-orb orb-a" />
      <div className="hero-orb orb-b" />

      <div className="hero-top reveal">
        <span>PORTFOLIO / 2026</span>
        <span>FULL STACK WEB DEVELOPER</span>
      </div>

      <div className="hero-main">
        <p className="eyebrow reveal">HELLO, I&apos;M AKTARUL</p>

        <h1 className="hero-title">
          <span className="line reveal">I BUILD</span>
          <span className="line accent reveal">DIGITAL</span>
          <span className="line reveal">
            THINGS<span className="dot">.</span>
          </span>
        </h1>

        <div className="hero-bottom reveal">
          <p>
            Full-stack developer focused on turning ideas
            into fast, useful and memorable web experiences.
          </p>

          <a href="#work" className="round-arrow">
            ↓
          </a>
        </div>
      </div>

      <Floating3D />

      <div className="hero-marquee">
        <div>
          FULL STACK · REACT · NODE · MONGODB · E-COMMERCE · UI · FULL STACK · REACT · NODE · MONGODB ·
        </div>
      </div>
    </section>
  );
}