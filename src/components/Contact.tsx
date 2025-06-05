'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
  
    if (res.ok) {
      setSubmitted(true)
      setForm({ name: "", email: "", message: "" })
    } else {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="w-full py-16 bg-muted/10 flex justify-center">
      <div className="max-w-2xl w-full p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Contact Me</h2>
        {submitted ? (
          <div className="text-center text-green-600 font-medium">
            ✅ Thanks for reaching out!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        )}
      </div>
    </section>
  )
}
