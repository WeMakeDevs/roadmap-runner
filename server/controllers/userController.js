import User from "../models/user.js";

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
