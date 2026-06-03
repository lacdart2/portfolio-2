import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function ShareLink() {
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        await navigator.clipboard.writeText(window.location.href)

        setCopied(true)

        window.setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border font-body text-xs uppercase tracking-widest text-faint transition-all hover:border-accent hover:text-accent"
            aria-label="Copy link to this page"
        >
            {copied ? (
                <>
                    <Check size={14} aria-hidden="true" />
                    <span>Copied</span>
                </>
            ) : (
                <>
                    <Copy size={14} aria-hidden="true" />
                    <span>Copy link</span>
                </>
            )}
        </button>
    )
}