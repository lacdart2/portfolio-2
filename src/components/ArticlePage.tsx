import Header from '../components/Header'
import Footer from '../components/Footer'
import ShareLink from '../components/ShareLink'
import { projects } from '../data/projects'
import BrowserMockup from '../components/BrowserMockup'
import { ArrowRight } from 'lucide-react'

interface ArticlePageProps {
    slug: string
}

export default function ArticlePage({ slug }: ArticlePageProps) {
    const project = projects.find((projectItem) => projectItem.slug === slug)

    if (!project) {
        return <div className="p-10 text-white">Project not found</div>
    }

    const sectionLabelClass =
        'mb-4 font-body text-xs uppercase tracking-widest text-accent'

    const externalLinkClass =
        'px-6 py-2 font-body text-sm uppercase tracking-widest transition-colors'

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="mx-auto max-w-4xl px-6 pt-32 pb-24">
                <div className="flex items-center justify-between mb-8">
                    <p className="font-body text-xs uppercase tracking-widest text-accent">
                        {project.category}
                    </p>

                    <ShareLink />
                </div>

                <h1
                    className="mb-10 font-display text-white leading-tight"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                >
                    {project.title}
                </h1>

                <div className="mb-10">
                    <BrowserMockup
                        src={project.articleImage}
                        alt={project.title}
                        url={project.liveUrl}
                    />

                    <p className="mt-3 font-body text-xs tracking-wide text-faint">
                        {project.imageCaption}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12 py-6 border-y border-border">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${externalLinkClass} bg-accent text-background hover:bg-accent-hover`}
                    >
                        Live site <ArrowRight size={14} aria-hidden="true" className="inline ml-1" />
                    </a>

                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${externalLinkClass} border border-border text-muted hover:border-accent hover:text-accent`}
                    >
                        GitHub README <ArrowRight size={14} aria-hidden="true" className="inline ml-1" />
                    </a>
                </div>

                <div className="prose-custom">
                    <p className="font-body text-base text-muted leading-relaxed whitespace-pre-line">
                        {project.description}
                    </p>
                </div>

                <section className="mt-12">
                    <p className={sectionLabelClass}>Tech stack</p>

                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-1 border border-border font-body text-sm text-muted"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mt-10">
                    <p className={sectionLabelClass}>Improvements made</p>

                    <ul className="flex flex-col gap-2">
                        {project.improvements.map((item, index) => (
                            <li
                                key={`${item}-${index}`}
                                className="flex items-start gap-3 font-body text-sm text-muted"
                            >
                                <ArrowRight size={14} aria-hidden="true" className="mt-1 text-accent shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    )
}