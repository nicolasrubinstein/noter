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
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { googleId } = req.body;
    const newUser = new User({ googleId });
    yield newUser.save();
    res.status(201).send(newUser);
});
const allUsers = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.find({});
    res.json(users);
});
module.exports = { addUser, allUsers };
//# sourceMappingURL=users.js.map