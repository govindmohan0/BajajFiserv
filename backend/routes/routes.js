import { Router } from "express";
import user from "../schema/schema.js";
import { uploadOnCloudinary } from "../cloudinary/cloudinary.js";
const router = Router();
import express from "express";
import multer from "multer";
import { upload1 } from "./multer.js";
const upload = multer({ dest: "uploads/" });

router.post(
  "/",
  upload1.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    try {
      console.log("File uploaded:", req.file);
      console.log("Form data:", req.body);

      // Extract form data
      const { name, email, phone_number } = req.body;

      // Upload image to Cloudinary
      const localFilePath = req.files?.image[0].path;
      if (!localFilePath)
        return res.status(500).json({ message: "Image upload failed" });
      const cloudinaryResponse = await uploadOnCloudinary(localFilePath);

      if (!cloudinaryResponse) {
        console.log("Cloudinary upload failed");
        return res.status(500).json({ message: "Image upload failed" });
      }

      console.log("Cloudinary Response:", cloudinaryResponse);

      // Save user data to MongoDB
      const newUser = new user({
        name,
        email,
        phone_number,
        image: cloudinaryResponse?.url || "", // Save the Cloudinary URL
      });

      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.log("Error occurred:", error.message);
      res.status(500).json({ message: error.message });
    }
  }
);



router.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error occurred:", error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;
