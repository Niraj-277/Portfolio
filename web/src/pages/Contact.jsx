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
    <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          Get in touch
        </h2>
        <p className="mt-4 text-xl text-neutral-300 max-w-2xl mx-auto">
          Have a project or collaboration in mind? Let's discuss how we can work together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-600/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-lg font-medium text-white hover:text-brand-400 transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-600/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-lg font-medium text-white hover:text-brand-400 transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Response</h3>
            <p className="text-neutral-300 leading-relaxed">
              I typically respond to messages within 24 hours. For urgent matters, 
              feel free to call or text me directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl bg-neutral-800/50 border border-neutral-700 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl bg-neutral-800/50 border border-neutral-700 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full rounded-xl bg-neutral-800/50 border border-neutral-700 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={status.loading}
              className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 px-6 py-3 text-base font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {status.loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {status.error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-sm text-red-400">{status.error}</p>
              </div>
            )}
            
            {status.success && (
              <div className="p-4 bg-brand-500/10 border border-brand-500/20 rounded-xl">
                <p className="text-sm text-brand-400">{status.success}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}



