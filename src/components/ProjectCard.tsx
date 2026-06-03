import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import BrowserMockup from './BrowserMockup'
import { ArrowRight } from 'lucide-react'

interface Props {
    project: Project
    index: number
}

export default function ProjectCard({ project, index }: Props) {
    return (
        <Link
            to={`/${project.slug}`}
            className="group block border border-border hover:border-accent transition-all duration-300"
        >
            <BrowserMockup
                src={project.thumbnail}
                alt={project.title}
                url={project.liveUrl}
            />

            <div className="p-6 border-t border-border">
                <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">
                    {String(index + 1).padStart(2, '0')} — {project.category}
                </p>
                <h3 className="font-display text-white text-xl mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="font-body text-sm text-faint leading-relaxed line-clamp-2">
                    {project.shortDesc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent text-xs font-body tracking-widest uppercase">
                    <span>View project</span>
                    <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    )
}