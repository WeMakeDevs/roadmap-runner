import express from "express";
import {
  addRoadmap,
  getAllRoadmaps,
  getRoadmapByRoadmapId,
  getRoadmapByUserId,
  getRoadmapByRoadmapIdUserId,
} from "../controllers/roadmapController.js";
import { isAuthorized } from "../middleware/auth.js";

const router = express.Router();

router.route("/roadmap").get(isAuthorized, getAllRoadmaps);
router.route("/roadmap/:id").get(isAuthorized, getRoadmapByRoadmapId);
router.route("/roadmapsByUserId/").get(isAuthorized, getRoadmapByUserId);
router
  .route("/roadmapByUserId/:id")
  .get(isAuthorized, getRoadmapByRoadmapIdUserId);

export default router;
