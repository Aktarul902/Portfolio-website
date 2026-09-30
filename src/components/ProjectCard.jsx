import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.tone || ""} reveal`}>
      <div className="project-index">{project.number}</div>

      <div className="project-visual">
        <ProjectPreview
          src={project.preview}
          alt={`${project.title} project preview`}
        />
      </div>

      <div className="project-info">
        <span className="project-type">{project.type}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.live}
            target={project.live.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            LIVE ↗
          </a>

          <a href={project.repo} target="_blank" rel="noreferrer">
            CODE ↗
          </a>
        </div>
      </div>
    </article>
  );
}