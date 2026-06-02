import Header from '../components/Header'
import Footer from '../components/Footer'
import ShareLink from '../components/ShareLink'
import { projects } from '../data/projects'
import BrowserMockup from './BrowserMockup'

interface Props {
    slug: string
}

export default function ArticlePage({ slug }: Props) {
    const project = projects.find((p) => p.slug === slug)
    if (!project) return <div className="text-white p-10">Project not found</div>

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <p className="font-body text-xs text-accent tracking-widest uppercase">
                        {project.category}
                    </p>
                    <ShareLink />
                </div>

                <h1 className="font-display text-white leading-tight mb-10"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                    {project.title}
                </h1>

                <div className="mb-10">
                    <BrowserMockup
                        src={project.articleImage}
                        alt={project.title}
                        url={project.liveUrl}
                    />
                    <p className="font-body text-xs text-faint mt-3 tracking-wide">
                        {project.imageCaption}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12 border-t border-b border-border py-6">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm tracking-widest uppercase bg-accent text-background px-6 py-2 hover:bg-accent-hover transition-colors"
                    >
                        Live site →
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm tracking-widest uppercase border border-border text-muted px-6 py-2 hover:border-accent hover:text-accent transition-colors"
                    >
                        GitHub README →
                    </a>
                </div>

                <div className="prose-custom">
                    <p className="font-body text-muted leading-relaxed whitespace-pre-line text-base">
                        {project.description}
                    </p>
                </div>

                <div className="mt-12">
                    <p className="font-body text-xs text-accent tracking-widest uppercase mb-4">
                        Tech stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="font-body text-sm text-muted border border-border px-4 py-1"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <p className="font-body text-xs text-accent tracking-widest uppercase mb-4">
                        Improvements made
                    </p>
                    <ul className="flex flex-col gap-2">
                        {project.improvements.map((item, i) => (
                            <li key={i} className="font-body text-sm text-muted flex items-start gap-3">
                                <span className="text-accent mt-1">→</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </main>

            <Footer />
        </div>
    )
}