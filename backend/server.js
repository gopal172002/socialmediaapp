// server.js
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error(error.message));
