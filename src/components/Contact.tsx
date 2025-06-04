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
    <section id="contact" className="w-full py-16 bg-muted/10">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
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
