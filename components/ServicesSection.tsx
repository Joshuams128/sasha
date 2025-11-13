const services = [
  {
    title: "Instructional Design",
    body: "End-to-end design from needs analysis and learning strategy through scripting, storyboarding, and content writing."
  },
  {
    title: "Digital Learning Development",
    body: "Development in Articulate Storyline, Rise, and Vyond, including advanced interactions, branching scenarios, and simulations."
  },
  {
    title: "Visual & Media Design",
    body: "Custom graphics, animated explainer videos, and on-brand visual design that supports learning and accessibility."
  },
  {
    title: "Consulting & Optimization",
    body: "Converting ILT to digital, improving existing modules, and aligning learning with measurable business outcomes."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          How I can help
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-2xl">
          I partner with organizations to design and develop learning that
          solves real problems—from compliance and safety to leadership and
          systems training.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-sm font-semibold text-emerald-400">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-200">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
