const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Wow! My Automated DevOps Project is Live on AWS! 🚀'));
app.listen(3000, () => console.log('Server running on port 3000'));
