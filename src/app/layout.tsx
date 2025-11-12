import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import ChatbaseScript from '@/components/chatbase-script'

const montserrat = Montserrat({ subsets: ['latin'] })

export const viewport = {
  title: 'Fakhrie Nabil',
  description: 'Web Developer & Data Scientist Portfolio',
  width: 'device-width',
  initialScale: 1,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body className={`${montserrat.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <main className="text-foreground min-h-screen w-full">
              {children}
            </main>
            <ChatbaseScript />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
