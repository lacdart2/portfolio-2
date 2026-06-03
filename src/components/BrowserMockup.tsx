import { Lock } from 'lucide-react'

interface BrowserMockupProps {
    src: string
    alt: string
    url: string
}

const browserDots = [
    'bg-[#ff5f57]',
    'bg-[#febc2e]',
    'bg-[#28c840]',
]

export default function BrowserMockup({ src, alt, url }: BrowserMockupProps) {
    return (
        <div className="w-full border border-border bg-card">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface">
                <div className="flex items-center gap-1.5">
                    {browserDots.map((colorClass) => (
                        <span
                            key={colorClass}
                            className={`w-3 h-3 rounded-full ${colorClass}`}
                        />
                    ))}
                </div>
                <div className="flex-1 mx-4">
                    <div className="flex items-center gap-2 px-3 py-1 border border-border bg-background">
                        <Lock size={10} className="text-faint" />
                        <span className="truncate font-body text-xs text-faint">
                            {url}
                        </span>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full object-cover object-top max-h-[280px]"
                />
            </div>
        </div>
    )
}