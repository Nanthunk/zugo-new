import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
  image: String,
  category: String
});

const Work = mongoose.model("Work", WorkSchema);

export default Work;