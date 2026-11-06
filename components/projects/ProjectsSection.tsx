import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectLinks } from "./ProjectLinks";

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul
      aria-label="Technical stack"
      className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] tracking-[0.08em] text-ink-soft"
    >
      {stack.map((tool) => (
        <li key={tool} className="flex items-center gap-3">
          {tool}
          {tool !== stack[stack.length - 1] && (
            <span aria-hidden="true" className="text-line">
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function Points({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2.5">
      {points.map((point) => (
        <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
          <span aria-hidden="true" className="mt-[9px] h-1 w-3 shrink-0 bg-ink/70" />
          {point}
        </li>
      ))}
    </ul>
  );
}

type ProjectRowProps = {
  project: (typeof projects)[number];
  flip?: boolean;
};

export function ProjectRow({ project, flip = false }: ProjectRowProps) {
  const index = project.number.split("·")[1].trim();

  return (
    <Reveal>
      <article
        className={`grid gap-10 border-b border-line pb-16 pt-4 lg:gap-16 ${
          flip
            ? "lg:grid-cols-[0.65fr_1.35fr]"
            : "lg:grid-cols-[1.35fr_0.65fr]"
        }`}
      >
        <span
          aria-hidden="true"
          className="font-display text-6xl leading-none text-line lg:hidden"
        >
          {index}
        </span>

        <div className={flip ? "lg:order-2" : ""}>
          <p className="font-mono text-xs tracking-[0.2em] text-ink-soft">
            {project.number} · {project.category}
            {project.status === "deployed" && (
              <span className="ml-3 inline-flex items-center gap-1.5 border border-line px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-ink">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#9abd2f]" />
                Deployed
              </span>
            )}
          </p>
          <h3 className="mt-4 font-display text-fluid-2xl leading-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <div className="mt-8 max-w-xl">
            <Points points={project.points} />
          </div>
          <div className="mt-10">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div
          className={`flex flex-col justify-between gap-12 border-t border-line pt-6 lg:border-t-0 lg:pt-0 lg:py-0 ${
            flip ? "lg:order-1 lg:border-r lg:pr-12" : "lg:border-l lg:pl-12"
          }`}
        >
          <span
            aria-hidden="true"
            className="hidden font-display text-8xl leading-none text-line lg:block"
          >
            {index}
          </span>
          <StackList stack={project.stack} />
        </div>
      </article>
    </Reveal>
  );
}

/* Full index — Work page */
export function AllProjectsSection() {
  return (
    <section aria-labelledby="work-heading" className="pt-12 md:pt-16">
      <div className="container-x">
        <SectionHeading index="01" label="All work" />
        <Reveal>
          <h2
            id="work-heading"
            className="mt-8 max-w-3xl font-display text-fluid-3xl leading-[1.05]"
          >
            Engineering case studies — from adversarial testing to agentic
            systems.
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-20">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
