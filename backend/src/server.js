import express from 'express';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware to parse JSON request bodies
app.use(express.json());

app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  });
});


//mongodb+srv://gujarathibond:Divij&9475@prac.oyh3fhy.mongodb.net/?retryWrites=true&w=majority&appName=prac