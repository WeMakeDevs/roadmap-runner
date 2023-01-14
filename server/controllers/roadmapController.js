import Roadmap from "../models/roadmap.js";

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
