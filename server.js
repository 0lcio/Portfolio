const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Parse incoming JSON payloads
app.use(bodyParser.json());
// GitHub Webhook endpoint
app.post('/', (req, res) => {
  const payload = req.body;
  console.log('Received GitHub Webhook:', req.body);
  console.log('Received GitHub payload:', payload);
  // Verify that the event is a push to the master branch
  if (payload.ref === 'refs/heads/main') {
    // Execute the update script
    const { exec } = require('child_process');
    exec('/home/ubuntu/portfolio/update.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing update script: ${error}`);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('GitHub Webhook Received:', payload);
        console.log('Update successful:', stdout);
        res.status(200).send('Webhook received and update successful');
      }
    });
  } else {
    res.status(200).send('Webhook received, but no action taken');
  }
});


// Serve static files (HTML, CSS, JS) from the root directory
app.use(express.static(path.join(__dirname)));

// Handle requests for specific pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/skills', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'skills.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'projects.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

// Handle 404 page not found
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});