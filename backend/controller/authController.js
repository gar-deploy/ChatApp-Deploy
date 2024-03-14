import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/tokenAndCookie.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await userModel.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //HASH PASSWORD HERE

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //https://avatar.iran.liara.run/public/boy - Profile Pic generator Api

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy/${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl/${username}`;

    const newUser = new userModel({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // JWT Token
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ Error: "Invalid user details" });
    }
  } catch (error) {
    console.log("Error in SIgnup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || " "
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).send({ error: "Invalid Username or Password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in Login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "User Logged Out Successfully." });

  } catch (error) {

    console.log("Error in Logout controller", error.message);
    res.status(500).json({ error: "Internal server error" });
    
  }
};
