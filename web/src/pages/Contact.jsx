import { useState } from 'react'
import { submitContact } from '../lib/supabaseClient.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    const { data, error } = await submitContact(form)
    if (error) {
      setStatus({ loading: false, error: error.message || 'Something went wrong', success: '' })
    } else {
      setStatus({ loading: false, error: '', success: 'Thanks! I will get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section className="py-16 sm:py-24 max-w-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
      <p className="mt-2 text-neutral-300">Have a project or collaboration in mind? Let’s talk.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm text-neutral-300 mb-1">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300 mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-300 mb-1">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="h-32 w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600"
            placeholder="How can I help?"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status.loading}
          className="inline-flex items-center rounded-md bg-brand-600 hover:bg-brand-500 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {status.loading ? 'Sending…' : 'Send message'}
        </button>
        {status.error && <p className="text-sm text-red-400">{status.error}</p>}
        {status.success && <p className="text-sm text-brand-400">{status.success}</p>}
      </form>
    </section>
  )
}



