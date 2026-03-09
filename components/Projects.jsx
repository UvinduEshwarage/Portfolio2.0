'use client'
import { useState } from 'react'

const projects = [
  {
    id: '01',
    name: 'LOLIFY Social Media platform',
    description: 'A Social Media platform to do meme Battles and Upload Memes.',
    tech: ['React', 'Next.js', 'Mongodb', 'Tailwind'],
    category: 'Full-Stack',
    github: ' https://github.com/thethilina/LOLify.git',
    demo: '#',
    behance: '#',
    year: '2025',
    highlight: true,
  },
  {
    id: '02',
    name: 'User Management App',
    description: 'To Practice Crud Operations and JWT Authentications I Created This Use Management App.',
    tech: ['Next.js', 'Mongodb', 'Tailwind'],
    category: 'Web App',
    github: 'https://github.com/https://github.com/UvinduEshwarage/User-Management.git',
    demo: 'https://user-management-umber-two.vercel.app/login',
    year: '2026',
  },
  {
    id: '03',
    name: 'Revenue Prediction Pos System',
    description: 'Revenue prediction system for Isuru Fiberglass Industries.{Under Development}',
    tech: ['Next.js', 'Python', 'MongoDB','Tailwind'],
    category: 'AI/ML',
    github: 'https://github.com/uvindune',
    demo: '#',
    behance: '#',
    year: '2026',
    highlight: true,
  },
  {
    id: '04',
    name: 'Banana Math Quiz Game',
    description: 'A fun math quiz game for kids to learn about algebra.',
    tech: ['Next.js', 'MongoDB', 'React','Tailwind'],
    category: 'Full-Stack',
    github: 'https://github.com/https://github.com/UvinduEshwarage/Banana-Math-Quiz-Game.git',
    demo: '#',
    behance: '#',
    year: '2026',
    highlight: true,
  },
  {
    id: '05',
    name: 'Think-Board',
    description: 'A fullstack web application that allows users to create and share their ideas in a visual format.',
    tech: ['Express','Tailwind', 'MongoDB', 'React','Node.js'],
    category: 'Full-Stack',
    github: 'https://github.com/UvinduEshwarage/MERN-ThinkBoard.git',
    demo: 'https://lnkd.in/dPnUqAqv',
    behance: '#',
    year: '2026',
    highlight: true,
  }
]

const categories = ['All', 'Full-Stack', 'Web App', 'Mobile', 'AI/ML']

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-accent tracking-widest mb-3">/ SELECTED WORK</div>
            <h2 className="font-display text-6xl md:text-7xl leading-none">
              MY<br /><span className="text-accent">PROJECTS</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-xs tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                  active === cat
                    ? 'border-accent bg-accent text-bg'
                    : 'border-border text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`project-card group border bg-surface p-6 relative overflow-hidden ${
                project.highlight ? 'border-accent/20' : 'border-border'
              }`}
            >
              {/* Background number */}
              <div className="absolute -bottom-4 -right-2 font-display text-[8rem] text-border/30 leading-none select-none pointer-events-none group-hover:text-accent/10 transition-colors duration-300">
                {project.id}
              </div>

              {project.highlight && (
                <div className="absolute top-0 right-0 bg-accent text-bg font-mono text-xs px-2 py-1 tracking-wider">
                  FEATURED
                </div>
              )}

              {/* Preview placeholder */}
              <div className="w-full h-36 bg-bg border border-border mb-5 overflow-hidden relative">
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #111 25%, transparent 25%), linear-gradient(225deg, #111 25%, transparent 25%), linear-gradient(45deg, #111 25%, transparent 25%), linear-gradient(315deg, #111 25%, #0d0d0d 25%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                  }}
                >
                  <span className="font-display text-3xl text-border tracking-widest">{project.name.split(' ')[0].toUpperCase()}</span>
                </div>
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="font-mono text-xs text-accent tracking-wider">Project name</span>
                    <h3 className="font-display text-2xl mt-0.5">{project.name}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted mt-1">{project.year}</span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="mb-5">
                  <span className="font-mono text-xs text-muted/60 block mb-2">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="skill-tag font-mono text-xs border border-border text-muted px-2 py-0.5 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors">
                    <GithubIcon /> GitHub Repo
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors">
                    <ExternalIcon /> Live Demo
                  </a>
                  <a href={project.behance} className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors">
                    <span className="font-bold text-sm">B</span> Behance
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/UvinduEshwarage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-muted hover:text-accent border border-border hover:border-accent px-8 py-4 transition-all duration-200"
          >
            <GithubIcon />
            VIEW ALL ON GITHUB →
          </a>
        </div>
      </div>
    </section>
  )
}
