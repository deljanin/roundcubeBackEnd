const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "messagesDB",
  connectionLimit: 20,
});

module.exports = {
  getMessages: (callback) => {
    pool.getConnection((error, connection) => {
      if (error) {
        console.error("Error connecting to database:", error);
        return callback("Failed to connect to database", null);
      }

      connection.query(
        "SELECT * FROM (SELECT * FROM messages ORDER BY id DESC LIMIT 10) sub ORDER BY id ASC",
        (error, results) => {
          connection.release();

          if (error) {
            console.error("Error executing MySQL query:", error);
            return callback("Failed to retrieve messages from database", null);
          }

          callback(null, results);
        }
      );
    });
  },

  addMessage: (message, name, callback) => {
    const newMessage = {
      message: message,
      name: name,
    };

    pool.getConnection((error, connection) => {
      if (error) {
        console.error("Error connecting to database:", error);
        return callback("Failed to connect to database", null);
      }

      connection.query(
        "INSERT INTO messages SET ?", // Noted here the SET ? syntax is used to indicate that the values will be provided as an object.
        newMessage, // The object being inserted into the DB
        (error, result) => {
          connection.release();

          if (error) {
            console.error("Error executing MySQL query:", error);
            return callback("Failed to store message in database", null);
          }

          callback(null, "Message stored successfully"); // null here indicates there were no errors, the 2nd param is the success message
        }
      );
    });
  },
};
