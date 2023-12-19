require("dotenv").config;
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Feedback = require("./models/feedback");
const MONGO_DB_URL =
  process.env.MONGO_DB_URL || "mongodb://127.0.0.1:27017/EmpowerSafe";

mongoose.connect(MONGO_DB_URL).then(() => {
  console.log("mongoDb connected");
});

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  //   res.send("heelp");
  res.render("index");
});

app.get("/about", (req, res) => {
  //   res.send("heelp");
  res.render("about");
});

app.get("/contact", (req, res) => {
  //   res.send("heelp");
  res.render("contact");
});

app.get("/taboo", (req, res) => {
  //   res.send("heelp");
  res.render("taboo");
});

app.get("/we-do", (req, res) => {
  //   res.send("heelp");
  res.render("we-do");
});

app.get("/images/:image", (req, res) => {
  const { image } = req.params;
  res.sendFile(path.join(__dirname, `./images/${image}`));
});

app.post("/feedback", async (req, res) => {
  const { name, email, phoneNo, message } = req.body;
  await Feedback.create({ name, email, phoneNo, message });
  res.redirect("back");
});

const port = 4000;
app.listen(port, () => {
  console.log("server is running");
});
