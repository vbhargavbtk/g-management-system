require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/auth.routes.js');
const roomRoutes = require('./routes/room.routes.js');
const complaintRoutes = require('./routes/complaint.routes.js');
const paymentRoutes = require('./routes/payment.routes.js');
const foodRoutes = require('./routes/food.routes.js');
const announcementRoutes = require('./routes/announcement.routes.js');

const app = express();

// Middleware
app.use(cors({ 
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/announcements', announcementRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
