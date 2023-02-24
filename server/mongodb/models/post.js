import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    post: { type: String, required: true },
});

const postSchema = mongoose.model("Post", Post);

export default postSchema;