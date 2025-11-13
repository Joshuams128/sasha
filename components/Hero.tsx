export function Hero() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-3">
            eLearning specialist · learning experience designer
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            I design{" "}
            <span className="text-emerald-400">immersive digital learning</span>{" "}
            that changes behaviour, not just tick boxes.
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-xl">
            From WHMIS compliance to leadership development, I blend
            instructional design, visual design, and digital learning
            development to create engaging, evidence-based experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full border border-transparent bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              View portfolio
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-200 hover:text-emerald-400"
            >
              Let&apos;s work together →
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Selected focus areas
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>• Scenario-based eLearning & branching simulations</li>
              <li>• Compliance & safety training that actually sticks</li>
              <li>• Software simulations & system onboarding</li>
              <li>• Leadership & performance management programs</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Tools: Storyline 360 · Rise 360 · Vyond · Adobe CC · LMS
              implementation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
