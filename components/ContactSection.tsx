export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-10">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Let&apos;s discuss your next learning project
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl">
            Whether you&apos;re converting ILT to eLearning, building a new
            program from scratch, or refreshing existing modules, I&apos;d love
            to collaborate.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-200">
            <a
              href="mailto:sashascott22@gmail.com"
              className="inline-flex w-fit rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Email Sasha
            </a>
            <p className="text-xs text-slate-400">
              You can also connect via LinkedIn or share a brief about your
              project, including timelines and audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
