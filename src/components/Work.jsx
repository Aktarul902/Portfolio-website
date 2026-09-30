import ProjectCard from "./ProjectCard";
import GitHubProjects from "./GitHubProjects";

const featuredProjects = [
  {
    title: "Printzenz",
    type: "FEATURED / FULL-STACK",
    description:
      "A custom print-on-demand e-commerce platform built from the ground up with a modern storefront, authentication, cart, checkout, orders, admin tools and product management.",
    stack: [
      "React",
      "Vite",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
    ],
    number: "01",
    live: "https://printzenz.myshopify.com/",
    repo: "https://github.com/Aktarul902",
    tone: "lime",
    preview: "/previews/printzenz.svg",
  },
  {
    title: "Storefront Concept",
    type: "CONCEPT BUILD",
    description:
      "A front-end e-commerce experience exploring product discovery, animated cards, cart interactions and conversion-focused layouts. Clearly presented as a concept build.",
    stack: [
      "React",
      "CSS",
      "JavaScript",
      "Responsive UI",
    ],
    number: "02",
    live: "#contact",
    repo: "https://github.com/Aktarul902",
    tone: "orange",
    preview: "/previews/storefront.svg",
  },
  {
    title: "Dashboard Concept",
    type: "UI / FRONT-END",
    description:
      "A dashboard concept focused on information hierarchy, responsive layouts, reusable components and polished micro-interactions.",
    stack: [
      "React",
      "CSS",
      "Components",
      "UX",
    ],
    number: "03",
    live: "#contact",
    repo: "https://github.com/Aktarul902",
    tone: "violet",
    preview: "/previews/dashboard.svg",
  },
];

export default function Work() {
  return (
    <section className="work section-dark" id="work">
      <div className="section-label reveal">
        / 002 — SELECTED WORK
      </div>

      <div className="work-intro reveal">
        <h2>
          THINGS
          <br />
          <span>I BUILT.</span>
        </h2>

        <p>
          A mix of real work, current builds and
          clearly-labelled concept projects. No fake client
          claims. Just things made to learn and ship.
        </p>
      </div>

      <div className="projects">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
          />
        ))}
      </div>

      <GitHubProjects />
    </section>
  );
}