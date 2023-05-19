const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const messageController = require("./controllers/messageController");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/getMessages", messageController.getMessages);
app.post("/addMessage", messageController.addMessage);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
