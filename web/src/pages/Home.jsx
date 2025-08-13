import { useEffect, useState } from 'react'
import { fetchProjects } from '../lib/supabaseClient.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    let isMounted = true
    fetchProjects().then((data) => {
      if (isMounted) setProjects(data.slice(0, 3))
    })
    return () => { isMounted = false }
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-brand-400 font-medium">Hello, I’m Niraj</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            I build modern web experiences.
          </h1>
          <p className="text-neutral-300 leading-relaxed">
            Frontend-focused developer crafting responsive, accessible, and performant user interfaces.
            Skilled with React, Tailwind CSS, and Supabase.
          </p>
          <div className="flex gap-3">
            <a href="/projects" className="inline-flex items-center rounded-md bg-brand-600 hover:bg-brand-500 px-4 py-2 text-sm font-medium text-white">
              View Projects
            </a>
            <a href="/contact" className="inline-flex items-center rounded-md border border-neutral-700 hover:border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-200">
              Contact Me
            </a>
            <a href="/Nirajresume_.pdf" download className="inline-flex items-center rounded-md border border-brand-700 text-brand-300 hover:bg-brand-600/10 px-4 py-2 text-sm font-medium">
              Download Resume
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-brand-600/20 blur-2xl" aria-hidden="true" />
          <div className="relative aspect-video w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8">
            <div className="h-full w-full rounded-xl border border-neutral-800 grid place-items-center text-neutral-400">
              Portfolio Preview
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <a href="/projects" className="text-sm text-brand-400 hover:text-brand-300">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}


