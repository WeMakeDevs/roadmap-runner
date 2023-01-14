import express from "express";
import {
  addRoadmap,
  getAllRoadmaps,
  getRoadmapByRoadmapId,
} from "../controllers/roadmapController.js";
import { isAuthorized } from "../middleware/auth.js";

const router = express.Router();

// DO NOT USE
// router.route("/roadmap").post(addRoadmap);
router.route("/roadmap").get(isAuthorized, getAllRoadmaps);
router.route("/roadmap/:id").get(isAuthorized, getRoadmapByRoadmapId);

export default router;
