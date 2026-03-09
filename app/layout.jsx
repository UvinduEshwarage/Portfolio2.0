import './globals.css'
import { DM_Sans, Space_Mono, Bebas_Neue } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400'],
})

export const metadata = {
  title: 'Uvindu Nethmina Eshwarage — Full Stack Developer',
  description: 'Full-stack developer passionate about building scalable, high-performance web and mobile applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable} ${bebasNeue.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  )
}
