export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <a href="mailto:uvindu.nethmina30@gmail.com" className="font-mono text-xs text-muted hover:text-accent transition-colors hover-underline tracking-wider">
              uvindu.nethmina30@gmail.com
            </a>
            <a href="#" className="font-mono text-xs text-muted hover:text-accent transition-colors hover-underline tracking-wider">
              Contact Form
            </a>
          </div>

          {/* Center socials */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-xs text-muted/60 tracking-widest">LET'S CONNECT</span>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/uvindune" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-9 h-9 border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <div className="font-mono text-xs text-muted tracking-wider">BASED IN COLOMBO, SRI LANKA 🇱🇰</div>
            <div className="font-mono text-xs text-muted/50 mt-1 tracking-wider">AVAILABLE FOR REMOTE ROLES</div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="font-mono text-xs text-muted/40 tracking-wider">
            © 2026 UVINDU NETHMINA · BUILT WITH NEXT.JS & TAILWIND
          </p>
        </div>
      </div>
    </footer>
  )
}
