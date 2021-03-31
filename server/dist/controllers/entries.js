"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../database/models/User");
const getEntries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { googleId } = req.params;
    const requestedUser = yield User.findOne({ googleId });
    if (requestedUser) {
        const entries = requestedUser.entries;
        res.json(entries.reverse());
    }
    else {
        const newUser = new User({ googleId });
        yield newUser.save();
        res.json(newUser.entries);
    }
});
const addEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, googleId, title, isImportant } = req.body;
    const requestedUser = yield User.findOne({ googleId });
    yield User.updateOne({ googleId }, { entries: [...requestedUser.entries, { text, title, isImportant }] });
    res.status(201).send();
});
const editEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { googleId, newText, entryId, newTitle, newIsImportant } = req.body;
    const requestedUser = yield User.findOne({ googleId });
    const oldEntries = requestedUser.entries;
    const newEntries = oldEntries.map((entry) => {
        if (entry._id.toString() === entryId) {
            entry.text = newText;
            entry.title = newTitle;
            entry.isImportant = newIsImportant;
            return entry;
        }
        else {
            return entry;
        }
    });
    yield User.findOneAndUpdate({ googleId }, { entries: newEntries });
    res.send();
});
const deleteEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { googleId, entryId } = req.body;
    const requestedUser = yield User.findOne({ googleId });
    const newEntries = requestedUser.entries.filter((entry) => {
        return entry._id.toString() !== entryId;
    });
    yield User.findOneAndUpdate({ googleId }, { entries: newEntries });
    res.send();
});
module.exports = { getEntries, addEntry, editEntry, deleteEntry };
//# sourceMappingURL=entries.js.map