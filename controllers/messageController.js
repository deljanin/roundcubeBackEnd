const Message = require("../model/messageModel");

module.exports = {
  getMessages: (request, response) => {
    Message.getMessages((error, messages) => {
      if (error) {
        return response.status(500).json({ erroror: error });
      }

      response.json(messages);
    });
  },

  addMessage: (request, response) => {
    const { message, name } = request.body;

    if (!message || !name) {
      return response
        .status(400)
        .json({ error: "Message and name are needed" });
    }

    Message.addMessage(message, name, (error, responseult) => {
      if (error) {
        return response.status(500).json({ erroror: error });
      }

      response.json({ message: responseult });
    });
  },
};
