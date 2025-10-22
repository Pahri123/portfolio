'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Prevent hydration mismatch by rendering nothing until mounted
    return null
  }

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Sun className="stroke-main-foreground hidden size-4 sm:size-6 dark:inline cursor-pointer" />
      <Moon className="stroke-main-foreground inline size-4 sm:size-6 dark:hidden cursor-pointer" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
