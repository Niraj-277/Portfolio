export default function ProjectCard({ project }) {
  return (
    <a href={project.url || '#'} target="_blank" rel="noreferrer" className="group block rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 p-5 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold group-hover:text-brand-400">
          {project.title}
        </h3>
        <span className="text-xs text-neutral-400">{project.year || ''}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-300 line-clamp-3">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(project.tags || []).map((t) => (
          <span key={t} className="text-xs rounded-full border border-neutral-700 px-2 py-0.5 text-neutral-300">
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}



