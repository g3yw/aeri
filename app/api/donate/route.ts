import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
  const { amount } = await request.json()
  const cents = Math.round(Number(amount) * 100)

  if (!Number.isFinite(cents) || cents < 100 || cents > 99999900) {
    return Response.json({ error: 'Enter an amount between $1 and $999,999.' }, { status: 400 })
  }

  const origin = request.headers.get('origin') ?? 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    submit_type: 'donate',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: cents,
          product_data: { name: 'Aeri Hosting Donation' },
        },
      },
    ],
    success_url: `${origin}?donated=1`,
    cancel_url: origin,
  })

  return Response.json({ url: session.url })
}
