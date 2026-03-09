const skillGroups = [
  {
    label: 'LANGUAGES',
    skills: [
      { name: 'JavaScript', icon: '⬡', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Python', icon: '🐍', color: '#3776AB' },
      { name: 'SQL', icon: '{}', color: '#e8ff47' },
      { name: 'Node.js', icon: '⬡', color: '#339933' },

    ],
  },
  {
    label: 'FRAMEWORKS',
    skills: [
      { name: 'React', icon: '⚛', color: '#61DAFB' },
      { name: 'Next.js', icon: '▲', color: '#ffffff' },
      { name: 'Express', icon: '—', color: '#999' },
      { name: 'Tailwind CSS', icon: '≋', color: '#38BDF8' },
    ],
  },
  {
    label: 'DATABASES & TOOLS',
    skills: [
      { name: 'MongoDB', icon: '🍃', color: '#47A248' },
      { name: 'Git', icon: '⎇', color: '#F05032' },
      { name: 'Figma', icon: '✦', color: '#F24E1E' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface border-y border-border relative overflow-hidden">
      {/* Accent background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-32 bg-accent opacity-[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-accent tracking-widest mb-3">/ TECHNICAL EXPERTISE</div>
          <h2 className="font-display text-6xl md:text-7xl leading-none">
            TECH<br /><span className="text-accent">STACK</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="font-mono text-xs tracking-widest text-muted mb-6 pb-3 border-b border-border flex items-center gap-3">
                <span className="w-4 h-px bg-accent" />
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-tag group flex items-center gap-2 border border-border bg-bg px-3 py-2 cursor-default"
                  >
                    <span className="text-sm" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="font-mono text-xs text-text/80 group-hover:text-bg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-20 overflow-hidden border-t border-border pt-10">
          <div className="flex whitespace-nowrap marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mr-12">
                {['React', 'Next.js', 'Node.js', 'MongoDB',  'TypeScript'].map((t) => (
                  <span key={t} className="font-display text-4xl text-border tracking-widest">
                    {t} <span className="text-accent text-2xl">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
