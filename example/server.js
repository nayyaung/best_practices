const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/posts', (req, res) => {
    res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.json({ message: 'GET request received' });
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.json({ message: `GET request fetching post with id ${id} received` });
});

app.post('/posts', (req, res) => {
    res.json({ message: 'POST request received' });
});

app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `PUT request received for post with id ${id}` });
});

app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `DELETE request received for post with id ${id}` });
});

app.patch('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `PATCH request received for post with id ${id}` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});