export default function Footer() {
    const socials = [
        { label: 'GitHub', url: 'https://github.com/lacdart2' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/lakhdar-hafsi' },
    ]

    return (
        <footer className="border-t border-border py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-body text-faint text-sm tracking-widest uppercase">
                    © {new Date().getFullYear()} Lakhdar Hafsi
                </p>
                <div className="flex items-center gap-6">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-faint hover:text-accent transition-colors tracking-widest uppercase"
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}