import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import { projects } from '../data/projects'

const techStack = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
]

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const revealElements = document.querySelectorAll('.reveal')
        revealElements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="mx-auto max-w-6xl px-6 pt-40 pb-24">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col gap-6 md:max-w-xl">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="font-body text-xs uppercase tracking-widest text-accent">
                                Available for work
                            </span>
                        </div>

                        <h1
                            className="font-display leading-none tracking-tight text-white"
                            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
                        >
                            Frontend
                            <br />
                            <span className="text-accent">Developer.</span>
                        </h1>

                        <p className="max-w-md font-body text-base leading-relaxed text-muted">
                            Hi, I'm Lakhdar Hafsi — a frontend developer based in Norway,
                            building clean, accessible, and performant web experiences.
                        </p>

                        <div className="flex items-center gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-accent font-body text-sm uppercase tracking-widest text-background transition-colors hover:bg-accent-hover"
                            >
                                <span className="inline-flex items-center gap-2">
                                    View work
                                    <ArrowRight size={14} aria-hidden="true" />
                                </span>
                            </a>

                            <a
                                href="https://github.com/lacdart2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-border font-body text-sm uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-8 w-48 shrink-0 md:mt-0">
                        <div className="absolute -top-2 -right-2 w-full h-full border-t-2 border-r-2 border-accent" />
                        <div className="absolute -bottom-2 -left-2 w-full h-full border-b-2 border-l-2 border-border" />
                        <img
                            src="/images/profile.webp"
                            alt="Lakhdar Hafsi"
                            className="relative w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                        />
                    </div>
                </div>
            </section>

            <div className="border-t border-border" />

            <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
                <div className="flex items-end justify-between mb-12 reveal">
                    <div>
                        <p className="mb-2 font-body text-xs uppercase tracking-widest text-accent">
                            Selected work
                        </p>
                        <h2 className="font-display text-4xl text-white">Projects</h2>
                    </div>
                    <span className="hidden font-body text-sm text-faint md:block">
                        {projects.length} projects
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-background reveal"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-border" />

            <section id="about" className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid grid-cols-1 gap-16 items-start md:grid-cols-2">
                    <div className="reveal">
                        <p className="mb-2 font-body text-xs uppercase tracking-widest text-accent">
                            About me
                        </p>
                        <h2 className="mb-6 font-display text-4xl text-white">Who I am</h2>
                        <p className="mb-4 font-body leading-relaxed text-muted">
                            I'm a frontend development student at Noroff Vocational College,
                            currently in my second year. I'm passionate about building
                            interfaces that are both visually sharp and technically sound.
                        </p>
                        <p className="font-body leading-relaxed text-muted">
                            My focus is on clean code, accessible design, and building things
                            that work well on every device. I'm actively looking for
                            opportunities to grow as a developer.
                        </p>
                    </div>

                    <div className="reveal">
                        <p className="mb-6 font-body text-xs uppercase tracking-widest text-accent">
                            Tech stack
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            {techStack.map((tech) => (
                                <div
                                    key={tech}
                                    className="px-4 py-2 border border-border font-body text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-border" />

            <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    <div className="reveal">
                        <p className="mb-2 font-body text-xs uppercase tracking-widest text-accent">
                            Get in touch
                        </p>
                        <h2 className="mb-6 font-display text-4xl text-white">Let's talk</h2>
                        <p className="font-body leading-relaxed text-muted">
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