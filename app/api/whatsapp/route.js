export async function POST(request) {
  const { name, phone, email, date, time, guests } = await request.json()

  const message = `New Reservation:
Name: ${name}
Phone: ${phone}
Email: ${email}
Date: ${date}
Time: ${time}
Guests: ${guests}`

  // Here you would integrate with the WhatsApp Business API
  // This is a placeholder implementation
  console.log('Sending WhatsApp message:', message)

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
}

