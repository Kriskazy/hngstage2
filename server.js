const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.post("/calc", (req, res) => {
  const { operation_type, x, y } = req.body;
  const Enum = {
    addition: "addition",
    subtraction: "subtraction",
    multiplication: "multiplication",
  };
  if (operation_type === Enum.addition) {
    res.status(200).json({
      slackUsername: "kriskazy",
      operation_type: Enum.addition,
      result: parseInt(x) + parseInt(y),
    });
  } else if (operation_type === Enum.subtraction) {
    res.status(200).json({
      slackUsername: "kriskazy",
      operation_type: Enum.subtraction,
      result: parseInt(x) - parseInt(y),
    });
  } else if (operation_type === Enum.multiplication) {
    res.status(200).json({
      slackUsername: "kriskazy",
      operation_type: Enum.multiplication,
      result: parseInt(x) * parseInt(y),
    });
  } else {
    return res
      .status(400)
      .json(`${operation_type} is not a valid operation type`);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
