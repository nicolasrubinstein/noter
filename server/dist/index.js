const express = require("express");
const app = express();
const connectDB = require("./database/dbconfig");
const cors = require("cors");
app.use(express.json());
app.use(cors());
connectDB();
app.use("/entries", require("./routes/entries"));
app.use("/users", require("./routes/users"));
const port = process.env.PORT || 8000;
app.listen(port, console.log("Running..."));
//# sourceMappingURL=index.js.map