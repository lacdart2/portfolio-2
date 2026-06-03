import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import { projects } from '../data/projects'

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        )
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="font-body text-xs text-accent tracking-widest uppercase">
                            Available for work
                        </span>
                    </div>

                    <h1 className="font-display text-white leading-none tracking-tight"
                        style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
                        Frontend<br />
                        <span className="text-accent">Developer.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
                        <p className="font-body text-muted text-base max-w-md leading-relaxed">
                            Hi, I'm Lakhdar Hafsi — a frontend developer based in Norway,
                            building clean, accessible, and performant web experiences.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#projects"
                                className="font-body text-sm tracking-widest uppercase bg-accent text-background px-6 py-3 hover:bg-accent-hover transition-colors"
                            >
                                View work →
                            </a>
                            <a
                                href="https://github.com/lacdart2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-sm tracking-widest uppercase border border-border text-muted px-6 py-3 hover:border-accent hover:text-accent transition-colors"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Projects */}
            <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-12 reveal">
                    <div>
                        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                            Selected work
                        </p>
                        <h2 className="font-display text-white text-4xl">Projects</h2>
                    </div>
                    <span className="font-body text-faint text-sm hidden md:block">
                        {projects.length} projects
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                    {projects.map((project, i) => (
                        <div key={project.id} className="bg-background reveal" style={{ animationDelay: `${i * 100}ms` }}>
                            <ProjectCard project={project} index={i} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* About */}
            <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="reveal">
                        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                            About me
                        </p>
                        <h2 className="font-display text-white text-4xl mb-6">Who I am</h2>
                        <p className="font-body text-muted leading-relaxed mb-4">
                            I'm a frontend development student at Noroff Vocational College, currently in my
                            second year. I'm passionate about building interfaces that are both visually sharp
                            and technically sound.
                        </p>
                        <p className="font-body text-muted leading-relaxed">
                            My focus is on clean code, accessible design, and building things that work well
                            on every device. I'm actively looking for opportunities to grow as a developer.
                        </p>
                    </div>

                    <div className="reveal">
                        <p className="font-body text-xs text-accent tracking-widest uppercase mb-6">
                            Tech stack
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML', 'CSS', 'JavaScript', 'Git'].map((tech) => (
                                <div
                                    key={tech}
                                    className="font-body text-sm text-muted border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Contact */}
            <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="reveal">
                        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                            Get in touch
                        </p>
                        <h2 className="font-display text-white text-4xl mb-6">Let's talk</h2>
                        <p className="font-body text-muted leading-relaxed">
                            I'm open to frontend roles, internships, and freelance projects.
                            Drop me a message and I'll get back to you.
                        </p>
                    </div>
                    <div className="reveal">
                        <ContactForm />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}