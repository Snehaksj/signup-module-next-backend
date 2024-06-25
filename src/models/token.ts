import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface representing a document in MongoDB
interface IToken extends Document {
  username: string;
  tokenType: string;
  tokenValue: string;
  tokenExpiry?: Date;
}

// Define the schema corresponding to the document interface
const tokenSchema: Schema<IToken> = new Schema({
  username: {
    type: String,
    required: true,
  },
  tokenType: {
    type: String,
    required: true,
  },
  tokenValue: {
    type: String,
    required: true,
    unique: true,
  },
  tokenExpiry: {
    type: Date,
  },
});

// Create a Model
const Token: Model<IToken> =
  mongoose.models.Token || mongoose.model<IToken>("Token", tokenSchema);

export default Token;
