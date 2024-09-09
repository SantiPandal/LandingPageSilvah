const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/api/submit-email', (req, res) => {
    const { email } = req.body;
    console.log('Received email:', email);
    // Here you would typically save the email to a database
    res.json({ message: 'Email received successfully' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/Landing_page.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

