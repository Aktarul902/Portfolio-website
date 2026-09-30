export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-label reveal">
        / 003 — ABOUT
      </div>

      <div className="about-grid">
        <div className="about-stamp reveal">
          <span>AKTARUL</span>

          <small>
            BUILD
            <br />
            LEARN
            <br />
            REPEAT
          </small>
        </div>

        <div>
          <h2 className="reveal">
            I CARE ABOUT
            <br />
            <span>HOW IT WORKS.</span>
          </h2>

          <p className="about-text reveal">
            I enjoy taking an idea from a blank screen to a
            working product: planning the interface, writing
            the frontend, designing APIs, connecting the
            database and polishing the final experience.
          </p>

          <div className="facts reveal">
            <div>
              <strong>01</strong>
              <span>Self-directed learning</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Full-stack projects</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Always building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}