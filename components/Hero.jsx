'use client'
import { useEffect, useState } from 'react'

const roles = ['Full-Stack Developer', 'React & Next.js Expert', 'Mobile App Builder', 'UI/UX Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIndex]
    let i = typing ? displayed.length : displayed.length

    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section id="about" className="min-h-screen mesh-bg flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent opacity-[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-accent opacity-[0.04] blur-3xl pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 mb-8 animate-fade-up opacity-0-init delay-100">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              <span className="font-mono text-xs text-muted tracking-wider">AVAILABLE FOR REMOTE ROLES</span>
            </div>

            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none mb-4 animate-fade-up opacity-0-init delay-200">
              UVINDU<br />
              <span className="text-accent">NETHMINA</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-6 animate-fade-up opacity-0-init delay-300 h-8">
              <span className="font-mono text-sm text-muted tracking-wider">_</span>
              <span className="font-mono text-sm text-accent tracking-wide">
                {displayed}
                <span className="cursor-blink">|</span>
              </span>
            </div>

            <p className="text-muted leading-relaxed max-w-md mb-10 animate-fade-up opacity-0-init delay-400">
              Full-stack developer passionate about building scalable, high-performance web and mobile applications.
              End-to-end solutions from conceptualization to deployment, with obsessive attention to performance and UX.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init delay-500">
              <a
                href="#projects"
                className="bg-accent text-bg font-mono text-xs tracking-widest px-6 py-3 hover:bg-text transition-colors duration-200 uppercase"
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="border border-border text-muted font-mono text-xs tracking-widest px-6 py-3 hover:border-accent hover:text-accent transition-colors duration-200 uppercase"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            
          </div>

          {/* Photo card */}
          <div className="flex justify-center md:justify-end animate-fade-up opacity-0-init delay-300">
            <div className="relative">
              {/* Decorative border offset */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-accent opacity-30" />
              <div className="absolute -top-6 -right-6 w-full h-full border border-accent opacity-10" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 bg-surface border border-border overflow-hidden float">
                {/* Placeholder - replace with actual image */}
                <img 
  src="/dp.jpg" 
  alt="Uvindu Nethmina"
  className="w-full h-full object-cover object-top"
/>
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
                {/* Corner accent */}
                <div className="absolute top-4 left-4 font-mono text-xs text-accent bg-bg px-2 py-1 border border-accent">
                  FULL-STACK DEV
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-8 bg-surface border border-border px-4 py-3 backdrop-blur">
                <div className="font-mono text-xs text-muted mb-1">BASED IN</div>
                <div className="font-body text-sm text-text font-medium">Colombo, Sri Lanka 🇱🇰</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0-init delay-600">
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
