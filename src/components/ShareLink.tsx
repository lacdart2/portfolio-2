import { useState } from 'react'

export default function ShareLink() {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 font-body text-xs text-faint hover:text-accent border border-border hover:border-accent px-4 py-2 transition-all tracking-widest uppercase"
            aria-label="Copy link to this page"
        >
            <span>{copied ? '✓ Copied' : '⎘ Copy link'}</span>
        </button>
    )
}