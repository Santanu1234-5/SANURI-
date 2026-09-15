export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Return the public Supabase configuration using base64 decoding
  res.status(200).json({
    supabaseUrl: Buffer.from('aHR0cHM6Ly90dW9zZ3l0aWpkZndud2x6Y2ZlbC5zdXBhYmFzZS5jbw==', 'base64').toString('ascii'),
    supabaseAnonKey: Buffer.from('c2JfcHVibGlzaGFibGVfWkwwNERKRkNSNWZXSUhnNkt0U2htUV9HYXNiTUE2TQ==', 'base64').toString('ascii')
  });
}
