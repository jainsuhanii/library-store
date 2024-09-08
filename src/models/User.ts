import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

export default model<IUser>('User', userSchema);
