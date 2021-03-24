const express = require("express");
const app = express();
const connectDB = require("./database/dbconfig");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// db
connectDB();

// routing
app.use("/entries", require("./routes/entries"));
app.use("/users", require("./routes/users"));

// Run
const port = process.env.PORT || 8000;
app.listen(port, console.log("Running..."));
