import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const FULL_NAME = 'Lakhdar Hafsi'

export default function Header() {
    const [displayed, setDisplayed] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        let i = 0
        setDisplayed('')
        const interval = setInterval(() => {
            setDisplayed(FULL_NAME.slice(0, i + 1))
            i++
            if (i === FULL_NAME.length) clearInterval(interval)
        }, 80)
        return () => clearInterval(interval)
    }, [])

    const navLinks = [
        { label: 'Work', href: '/#projects' },
        { label: 'About', href: '/#about' },
        { label: 'Contact', href: '/#contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="font-body text-white tracking-widest uppercase text-sm">
                    {displayed}
                    <span className="animate-blink text-accent ml-[2px]">|</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-body text-sm text-faint hover:text-accent transition-colors tracking-widest uppercase"
                        >
                            {link.label}
                        </a>
                    ))}
                    {location.pathname !== '/' && (
                        <Link
                            to="/"
                            className="font-body text-sm border border-border px-4 py-1 text-muted hover:border-accent hover:text-accent transition-colors tracking-widest uppercase"
                        >
                            ← Back
                        </Link>
                    )}
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-muted hover:text-accent transition-colors"
                    aria-label="Toggle menu"
                >
                    <span className="font-body text-xl">{menuOpen ? '✕' : '☰'}</span>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-body text-sm text-muted hover:text-accent transition-colors tracking-widest uppercase"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}