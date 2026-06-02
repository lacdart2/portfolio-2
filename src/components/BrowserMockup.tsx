interface Props {
    src: string
    alt: string
    url: string
}

export default function BrowserMockup({ src, alt, url }: Props) {
    return (
        <div className="w-full border border-border bg-card">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface">
                <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-4">
                    <div className="flex items-center gap-2 bg-background border border-border px-3 py-1">
                        <span className="text-faint text-xs">🔒</span>
                        <span className="font-body text-xs text-faint truncate">{url}</span>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full object-cover object-top"
                    style={{ maxHeight: '280px' }}
                />
            </div>
        </div>
    )
}