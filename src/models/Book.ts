import { Schema, model, Document } from 'mongoose';

interface IBook extends Document {
  book_name: string;
  category: string;
  rent_per_day: number;
}

const bookSchema = new Schema<IBook>({
  book_name: { type: String, required: true },
  category: { type: String, required: true },
  rent_per_day: { type: Number, required: true }
});

export default model<IBook>('Book', bookSchema);
