'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useEffect } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
  emailjs.init('IWd-dvHkS2qAb3ZII')
}, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {

    await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
)
    setSent(true)
  } catch (err) {
    console.error("EmailJs Error",err)
    alert('Something went wrong. Please email me directly.')
  } finally {
    setSending(false)
  }

  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232, 255, 71, 0.04) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <div className="font-mono text-xs text-accent tracking-widest mb-3">/ REACH OUT</div>
            <h2 className="font-display text-6xl md:text-7xl leading-none mb-8">
              LET'S<br /><span className="text-accent">CONNECT</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-sm">
              Open to full-time roles, freelance projects, and interesting collaborations.
              Drop a message and I'll get back to you shortly.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              <a
                href="mailto:uvindu.nethmina30@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-200">
                  <span className="text-muted group-hover:text-bg transition-colors text-sm">@</span>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted/60 tracking-wider mb-0.5">EMAIL</div>
                  <div className="font-body text-sm hover-underline text-text">uvindu.nethmina30@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/uvindu-eshwarage-695377231/" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-200">
                  <svg className="w-4 h-4 text-muted group-hover:text-bg transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted/60 tracking-wider mb-0.5">LINKEDIN</div>
                  <div className="font-body text-sm hover-underline text-text">Connect with me</div>
                </div>
              </a>

              <a href="https://github.com/UvinduEshwarage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-200">
                  <svg className="w-4 h-4 text-muted group-hover:text-bg transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted/60 tracking-wider mb-0.5">GITHUB</div>
                  <div className="font-body text-sm hover-underline text-text">@uvindune</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="h-full flex items-center justify-center border border-accent/20 bg-surface p-12">
                <div className="text-center">
                  <div className="font-display text-6xl text-accent mb-4">✓</div>
                  <div className="font-display text-3xl mb-2">MESSAGE SENT</div>
                  <div className="font-mono text-xs text-muted tracking-wider">I'll be in touch soon.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs tracking-widest text-muted mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border px-4 py-3 font-body text-sm text-text placeholder-muted/40 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest text-muted mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border px-4 py-3 font-body text-sm text-text placeholder-muted/40 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest text-muted mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-surface border border-border px-4 py-3 font-body text-sm text-text placeholder-muted/40 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent text-bg font-mono text-xs tracking-widest py-4 hover:bg-text transition-colors duration-200 disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border border-bg border-t-transparent rounded-full animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    'SEND MESSAGE →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
