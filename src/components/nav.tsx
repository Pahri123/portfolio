'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

const links = [
  { path: 'home', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'work', text: 'Project' },
]

export default function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const offsets = links.map((link) => {
        const el = document.getElementById(link.path)
        if (!el) return { id: link.path, top: Infinity }
        const rect = el.getBoundingClientRect()
        return { id: link.path, top: rect.top }
      })
      const visible = offsets.filter((o) => o.top <= 80)
      setActive(visible.length ? visible[visible.length - 1].id : links[0].path)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-[#E8F8F5] border-border shadow-shadow rounded-base bg-[#5D3FD3] font-base w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base">
        {links.map((link) => (
          <button
            key={link.path}
            className={clsx(
              'hover:border-border rounded-base border-2 px-2 py-1 transition-colors cursor-pointer',
              active === link.path ? 'border-border' : 'border-transparent',
            )}
            onClick={() => scrollToSection(link.path)}
            type="button"
          >
            {link.text}
          </button>
        ))}
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
