import * as express from "express";
const User = require("../database/models/User");

interface Entry {
  _id: string;
  text: string;
  createdAt: Date;
  title: string;
  isImportant: boolean;
}

const getEntries = async (req: express.Request, res: express.Response) => {
  const { googleId } = req.params;
  const requestedUser = await User.findOne({ googleId });
  if (requestedUser) {
    const entries = requestedUser.entries;
    res.json(entries);
  } else {
    const newUser = new User({ googleId });
    await newUser.save();
    res.json(newUser.entries);
  }
};

const addEntry = async (req: express.Request, res: express.Response) => {
  const { text, googleId, title, isImportant } = req.body;
  const requestedUser = await User.findOne({ googleId });
  await User.updateOne(
    { googleId },
    { entries: [...requestedUser.entries, { text, title, isImportant }] }
  );
  res.status(201).send();
};

const editEntry = async (req: express.Request, res: express.Response) => {
  const { googleId, newText, entryId, newTitle, newIsImportant } = req.body;
  const requestedUser = await User.findOne({ googleId });
  const oldEntries = requestedUser.entries;
  const newEntries = oldEntries.map((entry: Entry) => {
    if (entry._id.toString() === entryId) {
      entry.text = newText;
      entry.title = newTitle;
      entry.isImportant = newIsImportant;
      return entry;
    } else {
      return entry;
    }
  });

  await User.findOneAndUpdate({ googleId }, { entries: newEntries });
  res.send();
};

const deleteEntry = async (req: express.Request, res: express.Response) => {
  const { googleId, entryId } = req.body;
  const requestedUser = await User.findOne({ googleId });
  const newEntries = requestedUser.entries.filter((entry: Entry) => {
    return entry._id.toString() !== entryId;
  });
  await User.findOneAndUpdate({ googleId }, { entries: newEntries });
  res.send();
};

module.exports = { getEntries, addEntry, editEntry, deleteEntry };
export {};
