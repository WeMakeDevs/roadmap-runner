import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  tagline: {
    type: String,
    required: [true, "Please provide a name"],
  },
  description: {
    type: String,
    required: [true, "Please provide a name"],
  },
  bannerImage: {
    type: String,
    required: [true, "Please provide a name"],
  },
  sections: [
    {
      id: String,
      title: String,
      subsections: [
        {
          id: String,
          title: String,
          resources: [{ id: String, title: String, url: String }],
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Roadmap", roadmapSchema);
