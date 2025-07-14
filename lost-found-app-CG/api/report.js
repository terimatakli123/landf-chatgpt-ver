let items = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { photoUrl, description, location } = req.body;
    if (!photoUrl || !description || !location) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    items.push({ id: Date.now(), photoUrl, description, location });
    return res.status(201).json({ message: 'Item reported successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
