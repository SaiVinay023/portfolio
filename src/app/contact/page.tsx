import Link from 'next/link'


export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form action="https://formspree.io/f/your_form_id" method="POST" className="max-w-lg space-y-3">
        <input className="w-full rounded-lg border p-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100" placeholder="Your name" name="name" required />
        <input className="w-full rounded-lg border p-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100" placeholder="Email" type="email" name="email" required />
        <textarea className="w-full rounded-lg border p-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100" placeholder="Message" name="message" rows={6} required />
        <button className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">Send</button>
      </form>
    </section>
  )
}
