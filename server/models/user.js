import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name should be under 40 characters"],
  },
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
  enrolledRoadmaps: [
    { roadmap: { type: mongoose.Schema.Types.ObjectId, ref: "Roadmap" } },
  ],
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
  progressStat: Number
});

// //encrypt password before save - HOOKS
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });

// // validate the password with passed on user password
// userSchema.methods.isValidatedPassword = async function (usersendPassword) {
//   return await bcrypt.compare(usersendPassword, this.password);
// };

// //create and return jwt token
// userSchema.methods.getJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRY,
//   });
// };

// //generate forgot password token (string)
// userSchema.methods.getForgotPasswordToken = function () {
//   // generate a long and randomg string
//   const forgotToken = crypto.randomBytes(20).toString("hex");

//   // getting a hash - make sure to get a hash on backend
//   this.forgotPasswordToken = crypto
//     .createHash("sha256")
//     .update(forgotToken)
//     .digest("hex");

//   //time of token
//   this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;

//   return forgotToken;
// };

export default mongoose.model("User", userSchema);
// module.exports = mongoose.model("User", userSchema);
