// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

module.exports = app;
