import type { Project } from "@/lib/projects";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              eLearning portfolio
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              A selection of scenario-based modules, simulations, and learning
              activities. Most samples link to short “experience this
              eLearning” demos.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-emerald-500/70 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                {project.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                {project.shortDescription}
              </p>

              {project.businessProblem && (
                <p className="mt-3 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">
                    Business problem:
                  </span>{" "}
                  {project.businessProblem}
                </p>
              )}

              {project.learningSolution && (
                <p className="mt-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">
                    Learning solution:
                  </span>{" "}
                  {project.learningSolution}
                </p>
              )}

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Tools: {project.toolsUsed.join(" · ")}
              </p>

              {project.sampleUrl && (
                <a
                  href={project.sampleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Experience this eLearning<span className="ml-1">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
