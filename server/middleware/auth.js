import admin from "../config/firebase.js";
import User from "../models/user.js";

export const isAuthorized = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      let user = await User.findOne({ email: decodedToken.email });
      console.log(user);
      req.user = user;
      return next();
    }

    return res.status(401).json({ success: false, message: "Unauthorized" });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
