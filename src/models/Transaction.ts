import { Schema, model, Document, Types } from 'mongoose';

interface ITransaction extends Document {
  book_name: String;
  name: String;
  issue_date: Date;
  return_date: Date | null;
  rent: number | null;
}

const transactionSchema = new Schema<ITransaction>({
  book_name: { type: String, ref: 'Book', required: true },
  name: { type: String, ref: 'User', required: true },
  issue_date: { type: Date, required: true },
  return_date: { type: Date, default: null },
  rent: { type: Number, default: null }
});

export default model<ITransaction>('Transaction', transactionSchema);
