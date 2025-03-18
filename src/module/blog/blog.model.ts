import mongoose, { Schema, Document } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema: Schema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const BlogModel = mongoose.model<IBlog & Document>("Blog", blogSchema);
export default BlogModel;
