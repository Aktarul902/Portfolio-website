export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-noise" />

      <div className="section-label reveal">
        / 007 — CONTACT
      </div>

      <div className="contact-content">
        <p className="eyebrow reveal">
          HAVE AN IDEA?
        </p>

        <h2 className="reveal">
          LET&apos;S
          <br />
          <span>BUILD IT.</span>
        </h2>

        <a
          className="contact-button reveal"
          href="mailto:aktarul902@gmail.com"
        >
          START A CONVERSATION
          <span>↗</span>
        </a>

        <div className="contact-links reveal">
          <a
            href="https://github.com/Aktarul902"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a href="mailto:aktarul902@gmail.com">
            EMAIL ↗
          </a>
        </div>
      </div>
    </section>
  );
}