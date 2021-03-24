import * as express from "express";
const User = require("../database/models/User");

const addUser = async (req: express.Request, res: express.Response) => {
  const { googleId } = req.body;
  const newUser = new User({ googleId });
  await newUser.save();
  res.status(201).send(newUser);
};

const allUsers = async (_: express.Request, res: express.Response) => {
  const users = await User.find({});
  res.json(users);
};

module.exports = { addUser, allUsers };
