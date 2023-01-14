import mongoose from "mongoose";
import User from "../models/user.js";
import Roadmap from "../models/roadmap.js";
import roadmap from "../models/roadmap.js";

export const signup = async (req, res) => {
  const { name, email, displayPicture } = req.body;

  if (!email || !name || !displayPicture) {
    return res
      .status(400)
      .json({ succes: false, message: "Name and email are required" });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, displayPicture });
    }
    return res.status(200).json({ success: true, user });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ succes: false, message: "An internal server error occured" });
  }
};

export const enrollRoadmap = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ succes: false, message: "roadmapId is required" });
  }

  try {
    const user = await User.findById(req.user._id);
    console.log(user.enrolledRoadmaps);
    const roadmapsFound = user.enrolledRoadmaps.filter(
      (roadmap) => roadmap.roadmapId === new mongoose.mongo.ObjectId(id)
    );
    console.log(roadmapsFound);
    if (roadmapsFound.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Already enrolled" });
    }
    user.enrolledRoadmaps.push({ roadmapId: id });
    await user.save();

    return res.status(200).json({ success: true, data: user.enrolledRoadmaps });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ succes: false, message: "An internal server error occured" });
  }
};
