import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import s from './ThemeToggle.module.scss'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            <button className={s.btn} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </>
    )
}
