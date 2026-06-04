import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

type ContactFormData = {
    name: string
    email: string
    message: string
}

const emptyForm: ContactFormData = {
    name: '',
    email: '',
    message: '',
}
export default function ContactForm() {
    const [form, setForm] = useState<ContactFormData>(emptyForm)
    const [status, setStatus] = useState<FormStatus>('idle')

    const inputClass =
        'w-full px-4 py-3 border border-border bg-card font-body text-sm text-muted transition-colors placeholder:text-faint focus:border-accent focus:outline-none'

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }))
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            if (!response.ok) {
                setStatus('error')
                return
            }

            setForm(emptyForm)
            setStatus('sent')
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="max-w-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs tracking-widest uppercase font-body text-faint">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs tracking-widest uppercase font-body text-faint">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className={inputClass}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs tracking-widest uppercase font-body text-faint">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        className={`${inputClass} resize-none`}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-fit px-8 py-3 bg-accent font-body text-sm uppercase tracking-widest text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
                >
                    {status === 'sending' ? (
                        'Sending...'
                    ) : (
                        <span className="flex items-center gap-2">
                            Send message
                            <ArrowRight size={14} aria-hidden="true" />
                        </span>
                    )}
                </button>

                {status === 'sent' && (
                    <p className="font-body text-sm text-accent">
                        Message sent. I'll be in touch soon.
                    </p>
                )}

                {status === 'error' && (
                    <p className="font-body text-sm text-red-400">
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </div>
    )
}