import Roadmap from "../models/roadmap.js";
import User from "../models/user.js";

export const addRoadmap = async (req, res) => {
  const { roadmap } = req.body;

  if (!roadmap) {
    return res
      .status(400)
      .json({ succes: false, message: "Roadmap is required" });
  }

  try {
    const roadmapRes = await Roadmap.create({ ...roadmap });

    return res.status(200).json({ success: true, roadmap: roadmapRes });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ success: false, message: "An internal server error occured" });
  }
};

export const getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find().select(
      "_id name tagline bannerImage"
    );
    return res.status(200).json({ success: true, roadmaps });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ success: false, message: "An internal server error occured" });
  }
};

export const getRoadmapByRoadmapId = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Roadmap id is required" });
  }

  try {
    const roadmap = await Roadmap.findById(id);

    const userEnrolledRoadmapsCount = await User.find({
      _id: req.user._id,
      enrolledRoadmaps: { $in: [id] },
    }).count();

    const isAlreadyEnrolled = userEnrolledRoadmapsCount > 0 ? true : false;

    return res.status(200).json({ success: true, roadmap, isAlreadyEnrolled });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ success: false, message: "An internal server error occured" });
  }
};

export const getRoadmapByUserId = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "enrolledRoadmaps",
      "name _id bannerImage"
    );

    return res
      .status(200)
      .json({ success: true, roadmaps: user.enrolledRoadmaps });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ success: false, message: "An internal server error occured" });
  }
};
