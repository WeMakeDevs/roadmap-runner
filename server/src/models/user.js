import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name should be under 40 characters"],
  },
  lastVisitedAt: Date,
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validate: [validator.isEmail, "Please enter email in correct format"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  enrolledRoadmaps: [{ type: mongoose.Schema.Types.ObjectId, ref: "Roadmap" }],
  progress: [
    {
      roadmapId: { type: mongoose.Schema.Types.ObjectId, ref: "Roadmap" },
      completedId: [
        {
          id: String,
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
  progressStat: Number,
  displayPicture: {
    type: String,
    default: "https://avatars.githubusercontent.com/u/49398178?v=4",
  },
});

export default mongoose.model("User", userSchema);
