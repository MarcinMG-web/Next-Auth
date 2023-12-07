import mongoose from 'mongoose';
/**
 * Schema
 */

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

/**
 * Model
 */

export default mongoose.models.User || mongoose.model('User', UserSchema);
