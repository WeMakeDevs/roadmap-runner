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
    const roadmapsCount = await User.find({
      _id: req.user._id,
      enrolledRoadmaps: { $in: [id] },
    }).count();

    if (roadmapsCount > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Already enrolled" });
    }

    user.enrolledRoadmaps.push(id);
    await user.save();

    return res.status(200).json({ success: true, data: user.enrolledRoadmaps });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ succes: false, message: "An internal server error occured" });
  }
};

export const updateProgress = async (req, res) => {
  const { roadmapId, resourceId } = req.body;

  if (!resourceId || !roadmapId) {
    return res
      .status(400)
      .json({ success: false, message: "resourceId & roadmapId are required" });
  }

  try {
    const response = await User.updateOne(
      { _id: req.user._id, "progress.roadmapId": roadmapId },
      {
        $push: { "progress.$.completedId": { id: resourceId } },
        $inc: { progressStat: 1 },
      }
    );

    if (response.modifiedCount === 0) {
      const response = await User.updateOne(
        { _id: req.user._id },
        {
          $push: {
            progress: {
              roadmapId,
              completedId: [{ id: resourceId }],
            },
          },
          $inc: { progressStat: 1 },
        }
      );
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ succes: false, message: "An internal server error occured" });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ progressStat: -1 }).limit(10);
    const count = await User.estimatedDocumentCount();

    return res.status(200).json({ success: true, users, count });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ succes: false, message: "An internal server error occured" });
  }
};

export const getHomeStats = async (req, res) => {
  try {
    const homeStats = await User.findById(req.user._id).select(
      "enrolledRoadmaps progressStat progress"
    );
    return res.status(200).json({ success: true, homeStats });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ succes: false, message: "An internal server error occured" });
  }
};
