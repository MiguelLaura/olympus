const express = require("express");

const app = express();
const port = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
