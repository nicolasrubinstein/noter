"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const { addUser, allUsers } = require("../controllers/users");
router.get("/allusers/ysNRyneCe2005", allUsers);
router.post("", addUser);
module.exports = router;
//# sourceMappingURL=users.js.map