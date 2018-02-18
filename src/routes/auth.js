import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

const router = express.Router();

router.post('/', (req, res) => {
  const { credentials } = req.body;
  User.findOne({ email: credentials.email }).then(user => {
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJSON() });
    } else {
      res.status(400).json({ errors: { global: "email and password combination are incorrect" } });
    }
  });
});

export default router;