import { Resend } from 'resend'

export const runtime = 'edge' // still ok

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  const resend = new Resend(process.env.RESEND_API_KEY!)  // moved inside

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    })

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

