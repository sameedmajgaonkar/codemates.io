require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const logger = require("./logger");
const users = require("./routes/users");
const logins = require("./routes/logins");
const questions = require("./routes/questions");

mongoose.connect("mongodb://127.0.0.1:27017/forum", { family: 4 }).then(() => {
  logger.info("Connected to forums backend");
});

app.use(express.json());
app.use(cors());
app.use("/api/users", users);
app.use("/api/logins", logins);
app.use("/api/questions", questions);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info(`Listening on PORT ${PORT}`));
