const skills = {
  "Learning Design": [
    "Adult learning theory & andragogy",
    "Scenario-based learning",
    "Branching & simulations",
    "Assessment & feedback design"
  ],
  "Tools & Tech": [
    "Articulate Storyline 360",
    "Articulate Rise 360",
    "Vyond",
    "Adobe Creative Cloud",
    "LMS implementation & SCORM/xAPI"
  ],
  "Focus Areas": [
    "Healthcare & long-term care",
    "Compliance & safety",
    "Leadership & HR programs",
    "Systems & process training"
  ]
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Skills & focus
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-sm font-semibold text-emerald-400">
                {group}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                {items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
