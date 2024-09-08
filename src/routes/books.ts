import { Router, Request, Response } from 'express';
import Book from '../models/Book';

const router = Router();

// Get books by name or term
router.get('/search', async (req: Request, res: Response) => {
  const term = req.query.name as string;
  const books = await Book.find({ book_name: { $regex: term, $options: 'i' } });
  res.json(books);
});

// Get books by rent range
router.get('/rent', async (req: Request, res: Response) => {
  const min = Number(req.query.min);
  const max = Number(req.query.max);
  const books = await Book.find({ rent_per_day: { $gte: min, $lte: max } });
  res.json(books);
});

// Get books by category, term, and rent range
router.get('/filter', async (req: Request, res: Response) => {
  const { category, name, min, max } = req.query;
  const books = await Book.find({
    category: category as string,
    book_name: { $regex: name as string, $options: 'i' },
    rent_per_day: { $gte: Number(min), $lte: Number(max) }
  });
  res.json(books);
});

// List all books
router.get('/', async (req: Request, res: Response) => {
  const books = await Book.find({});
  res.json(books);
});

export default router;
