export function AboutStrip() {
  return (
    <section
      id="about"
      className="border-b border-slate-800 bg-slate-900/80"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 md:flex md:items-center md:gap-10">
        <div className="md:w-2/3">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            About Sasha
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            I&apos;m an eLearning specialist and learning experience designer
            with a background in higher education and corporate learning. I
            create evidence-based, visually engaging learning that helps people
            do their jobs better—especially in complex environments like
            healthcare, long-term care, and HR.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            My work spans compliance, safety, leadership, and systems training.
            I love turning dense content into practical, scenario-driven
            experiences that feel relevant, human, and usable on the job.
          </p>
        </div>
      </div>
    </section>
  );
}
