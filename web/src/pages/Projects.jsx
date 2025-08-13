import { useEffect, useState } from 'react'
import { fetchProjects } from '../lib/supabaseClient.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    fetchProjects().then((data) => {
      if (isMounted) {
        setProjects(data)
        setLoading(false)
      }
    })
    return () => { isMounted = false }
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-neutral-300">Selected work powered by React and Supabase.</p>
      </div>

      {loading ? (
        <div className="text-neutral-400">Loading projects…</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  )
}


