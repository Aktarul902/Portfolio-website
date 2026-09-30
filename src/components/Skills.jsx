const skills = [
  [
    "01",
    "React",
    "Frontend architecture, reusable components, hooks and responsive interfaces.",
  ],
  [
    "02",
    "Node / Express",
    "REST APIs, authentication, business logic and server-side architecture.",
  ],
  [
    "03",
    "MongoDB",
    "Mongoose schemas, relationships, queries and application data.",
  ],
  [
    "04",
    "JavaScript",
    "Modern JavaScript, async code, API integration and problem solving.",
  ],
  [
    "05",
    "UI / UX",
    "Clean layouts, responsive design, motion, interaction and visual hierarchy.",
  ],
  [
    "06",
    "E-commerce",
    "Products, variants, carts, orders, admin systems and checkout flows.",
  ],
];

export default function Skills() {
  return (
    <section className="skills section-dark" id="skills">
      <div className="section-label reveal">
        / 004 — SKILLS
      </div>

      <div className="skills-heading reveal">
        <h2>
          THE
          <br />
          <span>TOOLBOX.</span>
        </h2>
      </div>

      <div className="skills-list">
        {skills.map(([number, title, description]) => (
          <div className="skill-row reveal" key={number}>
            <span>{number}</span>

            <h3>{title}</h3>

            <p>{description}</p>

            <b>↗</b>
          </div>
        ))}
      </div>
    </section>
  );
}