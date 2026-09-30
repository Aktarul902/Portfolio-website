import { useState } from "react";

const faqs = [
  [
    "Are you a graduate?",
    "No. I have completed Madhyamik and Higher Secondary. I am currently building my career through practical full-stack development, projects and continuous learning.",
  ],
  [
    "What do you build?",
    "I build modern websites and full-stack web applications, especially dashboards, e-commerce systems, portfolio sites and custom business tools.",
  ],
  [
    "What stack do you use?",
    "My main stack is React on the frontend and Node.js, Express and MongoDB on the backend. I also work with APIs, authentication, Git and deployment workflows.",
  ],
  [
    "Do you take freelance work?",
    "Yes. If the project is a good fit, you can contact me and tell me what you want to build, your target date and your requirements.",
  ],
  [
    "Where can I see your code?",
    "My public repositories are available on GitHub. The project section also loads your public repositories directly from GitHub.",
  ],
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq section-dark">
      <div className="section-label reveal">
        / 006 — FAQ
      </div>

      <div className="faq-grid">
        <div className="faq-title reveal">
          <h2>
            ASK
            <br />
            <span>ME.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={question}
            >
              <button
                type="button"
                onClick={() =>
                  setActive(
                    active === index ? -1 : index
                  )
                }
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{question}</strong>

                <i>
                  {active === index ? "−" : "+"}
                </i>
              </button>

              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}