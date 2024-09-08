import express from 'express';
import User from '../models/User'; // Import your User model

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    
    // If no users are found, return an empty array
    if (!users) {
      return res.status(200).json([]);
    }
    
    // Return users in JSON format
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
