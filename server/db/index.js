var mysql = require('mysql');

var Sequelize = require('sequelize');
var db = new Sequelize('chats', 'root', '');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var Users = db.define('users', {
  UserName: Sequelize.STRING,
});

var Messages = db.define('messages', {
  Text: Sequelize.STRING,
  RoomName: Sequelize.STRING,
  UserName: Sequelize.STRING
});


module.exports = {
  db: db,
  users: Users,
  messages: Messages
};

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

// connection.connect(function (err) {
//   if (err) {
//     console.log('Create DataBase connection got error: ', err);
//   } else {
//     console.log('Database is connected');
//   }
// });



// module.exports = connection;


