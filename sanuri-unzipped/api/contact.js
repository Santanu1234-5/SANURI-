export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Buffer.from('cmVfNTI3OWpZMTlfN3pSTFJGMVRuejNoVGQyVFZydzNXbmZW', 'base64').toString('ascii')}`
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: 'santanumaiti424@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h3>You have a new message from your website!</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(400).json({ error: data.message || 'Error sending email' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
