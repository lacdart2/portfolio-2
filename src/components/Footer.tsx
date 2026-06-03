const socials = [
    { label: 'GitHub', url: 'https://github.com/lacdart2' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/lakhdar-hafsi' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="px-6 py-10 border-t border-border">
            <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-6xl md:flex-row">
                <p className="font-body text-sm uppercase tracking-widest text-faint">
                    © {currentYear} Lakhdar Hafsi
                </p>

                <div className="flex items-center gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm uppercase tracking-widest text-faint transition-colors hover:text-accent"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}