#### This is the back end part of the project.<br>

Make sure you have nodejs and npm installed.

Database:<br>
You will need MySql on your machine. Open the MySql client and run the following SQL commands:<br>
(If you are having trouble running MySql this link might help you:<br>
https://stackoverflow.com/questions/41645309/mysql-error-access-denied-for-user-rootlocalhost)

```
CREATE DATABASE messagesDB;
USE messagesDB;
CREATE TABLE messages(id int NOT NULL AUTO_INCREMENT, message varchar(255),
name varchar(35), PRIMARY KEY (id));
```

Database connection: <br>
You may need to change the following in the `/model/messageModel.js` depending on your MySql settings:<br>

```
user: "root",
password: "Password",
```

Back end server:<br>
Run the following commands in the same directory of this README file, to run the server on your local machine.<br>

```
npm install
node server.js

```
