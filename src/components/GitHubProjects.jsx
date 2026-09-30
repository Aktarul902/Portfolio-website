import { lazy, Suspense, useEffect, useState } from "react";

const CodeModel3D = lazy(() => import("./CodeModel3D"));

const GITHUB_USER = "Aktarul902";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        return response.json();
      })
      .then((data) => {
        setRepos(
          data
            .filter((repo) => !repo.fork)
            .slice(0, 12)
        );
      })
      .catch(() => {
        setRepos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="github-section">
      <div className="section-label reveal">
        / GITHUB — PUBLIC BUILDS
      </div>

      <div className="github-heading reveal">
        <h2>
          MORE
          <br />
          <span>CODE.</span>
        </h2>

        <a
          href={`https://github.com/${GITHUB_USER}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
        >
          VIEW ALL REPOSITORIES ↗
        </a>
      </div>

      <Suspense fallback={<div className="code-model-stage" aria-hidden="true" />}>
        <CodeModel3D />
      </Suspense>

      {loading ? (
        <div className="repo-loading">
          LOADING PUBLIC REPOSITORIES...
        </div>
      ) : repos.length ? (
        <div className="repo-grid">
          {repos.map((repo, index) => (
            <a
              className="repo-card"
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {repo.name.replaceAll("-", " ")}
              </h3>

              <p>
                {repo.description ||
                  "A public build by Aktarul."}
              </p>

              <div>
                <small>
                  {repo.language || "WEB"}
                </small>

                <b>↗</b>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="repo-loading">
          OPEN GITHUB TO SEE THE LATEST BUILDS.
        </div>
      )}
    </section>
  );
}