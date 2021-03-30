const mongoose = require("mongoose");

const connect = async () => {
  const connectionString =
    "mongodb+srv://basquet09:basquet09@cluster0.fkp0g.mongodb.net/tododb?retryWrites=true&w=majority";
  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("DB connected");
};

module.exports = connect;
