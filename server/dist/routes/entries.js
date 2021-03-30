const router = require("express").Router();
const { getEntries, addEntry, editEntry, deleteEntry, } = require("../controllers/entries");
router.get("/:googleId", getEntries);
router.post("", addEntry);
router.patch("", editEntry);
router.delete("", deleteEntry);
module.exports = router;
//# sourceMappingURL=entries.js.map