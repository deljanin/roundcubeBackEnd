const express = require("express");
const bodyParser = require("body-parser");
const messageController = require("./controllers/messageController");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/getMessages", messageController.getMessages);
app.post("/addMessage", messageController.addMessage);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
