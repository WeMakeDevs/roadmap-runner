import express from "express";
import {
  signup,
  enrollRoadmap,
  updateProgress,
  getLeaderboard,
  getHomeStats,
} from "../controllers/userController.js";
import { isAuthorized } from "../middleware/auth.js";
const router = express.Router();

router.route("/signup").post(signup);
router.route("/enroll").post(isAuthorized, enrollRoadmap);
router.route("/progress").post(isAuthorized, updateProgress);
router.route("/leaderboard").get(isAuthorized, getLeaderboard);
router.route("/homeStats").get(isAuthorized, getHomeStats);

export default router;
