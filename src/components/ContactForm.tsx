import { useState } from 'react'

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
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }))
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                />

                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className={inputClass}
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className={`${inputClass} resize-none`}
                />

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-fit px-8 py-3 bg-accent font-body text-sm uppercase tracking-widest text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
                >
                    {status === 'sending' ? 'Sending...' : 'Send message →'}
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