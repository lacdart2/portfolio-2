import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'


const FULL_NAME = 'Lakhdar Hafsi'

const navLinks = [
    { label: 'Work', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
]

export default function Header() {
    const [displayedName, setDisplayedName] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const isArticlePage = location.pathname !== '/'

    useEffect(() => {
        let currentIndex = 0

        const typingInterval = window.setInterval(() => {
            setDisplayedName(FULL_NAME.slice(0, currentIndex + 1))
            currentIndex++
            if (currentIndex === FULL_NAME.length) {
                window.clearInterval(typingInterval)
            }
        }, 80)

        return () => window.clearInterval(typingInterval)
    }, [])

    function closeMenu() {
        setMenuOpen(false)
    }

    function toggleMenu() {
        setMenuOpen((currentState) => !currentState)
    }

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
            <div className="flex items-center justify-between mx-auto max-w-6xl h-16 px-6">
                <Link
                    to="/"
                    className="font-body text-sm uppercase tracking-widest text-white"
                    onClick={closeMenu}
                >
                    {displayedName}
                    <span className="ml-[2px] text-accent animate-blink">|</span>
                </Link>
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-body text-sm uppercase tracking-widest text-faint transition-colors hover:text-accent"
                        >
                            {link.label}
                        </a>
                    ))}
                    {isArticlePage && (
                        <Link
                            to="/"
                            className="px-4 py-1 border border-border font-body text-sm uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                            <ArrowLeft size={14} className="inline mr-1" />
                            Back
                        </Link>
                    )}
                </nav>
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="text-muted transition-colors hover:text-accent md:hidden"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className="font-body text-xl">
                        {menuOpen ? '✕' : '☰'}
                    </span>
                </button>
            </div>
            {menuOpen && (
                <nav className="flex flex-col gap-4 px-6 py-4 border-t border-border bg-surface md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="font-body text-sm uppercase tracking-widest text-muted transition-colors hover:text-accent"
                        >
                            {link.label}
                        </a>
                    ))}

                    {isArticlePage && (
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="w-fit px-4 py-1 border border-border font-body text-sm uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                            <ArrowLeft size={14} className="inline mr-1" />
                            Back
                        </Link>
                    )}
                </nav>
            )}
        </header>
    )
}