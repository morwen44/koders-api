const express = require("express");

const app = express();

const kodersRouter = require("./koders.routes");
const mentorsRouter = require("./mentors.routes");

app.use(express.json());

//middleware example
app.use((req, res, next) => {
  console.log("App middleware");
  console.log(`${req.method} ${req.url} ${req.body}`);
  next();
});

app.use((req, res, next) => {
  req.headers.authorization === "1234"
    ? next()
    : res.status(401).json({ message: "Unauthorized", success: false });
});

app.use("/koders", kodersRouter);

app.use("/mentors", mentorsRouter);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
