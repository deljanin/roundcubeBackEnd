This is the back end part of the project.
Make sure you have nodejs and npm installed.

Database:<br>
You will need MySql on your machine. Open the MySql client and create a database named "messagesDB". Then run the following SQL commands:<br>
USE messagesDB;<br>
CREATE TABLE messages(id int NOT NULL AUTO_INCREMENT, message varchar(255), name varchar(35), PRIMARY KEY (id));<br>


Back end server:<br>
Run the following commands in the same directory of this README file, to run the server on your local machine.<br>
npm install<br>
node server.js<br>

