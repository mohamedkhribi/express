const express = require("express");       
const moment = require("moment");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const currentDay = moment().day();
  const currentHour = moment().hour();

  if (currentDay < 1 || currentDay > 5 || currentHour < 8 || currentHour > 17) {
    return res.status(403).send("This page is only available from Monday to Saturday from 8 to 17.");
  }

  next();
});

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/contact", (req, res) => {
  res.render("Contact");
});

app.get("/Service", (req, res) => {
  res.render("Service");
});

const port = 8000;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`you are using port ${port}`);
});