const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Goalvoro API!' });
});

// Placeholder for future routes
// e.g., app.use('/quests', require('./routes/quests'));

app.listen(port, () => {
  console.log(`Goalvoro backend running on port ${port}`);
});