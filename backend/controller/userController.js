import userModel from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await userModel.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).send(filteredUsers);
  } catch (error) {
    console.error(
      "Error in getUsersForSidebar in userController",
      error.message
    );
    res.status(500).json({ error: "Internal server error." });
  }
};
