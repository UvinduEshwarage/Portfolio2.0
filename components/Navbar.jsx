'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Projects', 'Skills', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass py-3' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-widest text-accent">
          UNE<span className="text-text">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs tracking-widest text-muted hover:text-accent transition-colors duration-200 hover-underline uppercase"
            >
              {link}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="font-mono text-xs tracking-widest border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
          >
            CV ↓
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden nav-glass border-t border-border mt-3 px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-sm tracking-widest text-muted hover:text-accent transition-colors uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="/cv.pdf" download className="font-mono text-sm text-accent border border-accent px-4 py-2 w-fit">
            Download CV ↓
          </a>
        </div>
      )}
    </nav>
  )
}
