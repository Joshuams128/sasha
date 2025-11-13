export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Sasha Scott · SSCOTTLXD</span>
        <a
          href="http://sscottlxd.wordpress.com/elearningcourses/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400"
        >
          Legacy portfolio ↗
        </a>
      </div>
    </footer>
  );
}
