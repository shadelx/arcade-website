const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));
app.get('/home', (req, res) => {
  res.send('</html><body><h1>Welcome to the Arcade Website</h1></body></html>');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
