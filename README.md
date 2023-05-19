This is the back end part of the project.
Make sure you have nodejs and npm installed.

Database:
You will need MySql on your machine. Open MySql client and create a database named "messagesDB". Then run the following SQL commands:
USE messagesDB;
CREATE TABLE messages(id int NOT NULL AUTO_INCREMENT, message varchar(255), name varchar(35), PRIMARY KEY (id));

Back end sever:
Run the following commands in the same directory of this README file, to run the server on you local machine.
npm install
node server.js
