const router = require("express").Router();
const { addUser, allUsers } = require("../controllers/users");

// SuperUser only
router.get("/allusers/ysNRyneCe2005", allUsers);
router.post("", addUser);

module.exports = router;
export {};
