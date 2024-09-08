import express from 'express';
import connectDB from './database'; // Path to your database connection file
import booksRoute from './routes/books'; // Path to your books route file
import usersRoute from './routes/users'; // Path to your users route file
import transactionsRoute from './routes/transactions'; // Path to your transactions route file

const app = express();

// Connect to MongoDB
connectDB();

// Middleware and routes
app.use(express.json()); 


// Use routes
app.use('/books', booksRoute);
app.use('/users', usersRoute);
app.use('/transaction', transactionsRoute);



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
