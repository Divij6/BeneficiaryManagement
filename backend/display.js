import express from 'express';
import mongoose from "mongoose";
import userModel from "./models/userModel.js"; 
const router = express.Router();

const app = express();

mongoose.connect(
  "mongodb+srv://gujarathibond:Divij&9475@beneficiarysystem.odi5lbp.mongodb.net/?retryWrites=true&w=majority&appName=BeneficiarySystem",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

app.use(express.json());

// <-- Trial Add User to test my get users apis -->
app.post("/users", async (req, res) => {
  try {
    const { name, email, phone, password, address } = req.body;

    const newUser = new userModel({
      name,
      email,
      phone,
      password,
      address
    });

    await newUser.save(); 
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error adding user", error: err });
  }
});

// This endpoint fetches all users from the database
app.get("/get-users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});

// This endpoint fetches a user by their ID
app.get("/get-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
});

// Triallll Delete user by ID
app.delete("/delete-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", user: deletedUser });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
});

// Start server
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
