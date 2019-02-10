var db = require('../db');
module.exports = {
  messages: {
    get: function (callback) {
      db.messages.sync()
        .then(function () {
          return db.messages.findAll({ attributes: ['Text', 'RoomName', 'UserName'] });
        })
        .then(function (data) {
          var messages = data.map((value) => {
            return value.dataValues;
          });
          callback(null, messages);

        })
        .catch((err) => {
          console.log('Got err ', err);
        });
    }, // a function which produces all the messages
    // db.query('SELECT * from Messages', function (err, res) {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     callback(null, res); // res is data from database
    //   }
    // });
    post: function (data, callback) {
      db.messages.sync()
        .then(function () {
          return db.messages.create({ UserName: data.UserName, Text: data.Text, RoomName: data.RoomName });
        })
        .then(function (data) {
          callback(null, data.dataValues);
        })
        .catch((err) => {
          callback(err, null);
        });
      // generate date for the message
      // var messageDate = new Date()
      // db.query(`INSERT INTO Messages SET ?`, message, function (err, data) {
      //   if (err) {
      //     console.log('Error from messages.post', err);
      //   } else {
      //     callback(null, data);
      //   }
      // });
    }

    // a function which can be used to insert a message into the database
    // client post data to server, server send that 'data' to the database
    // we need to know the forget of the data from the client, so that we can pass to the database
    // the data from get and post request should be the same format.
  },
  users: {
    // Ditto as above.
    get: function (callback) {
      db.users.sync()
        .then(function () {
          return db.users.findAll({ attributes: ['UserName'] });
        })
        .then(function (data) {
          var username = data.map((value) => {
            return value.dataValues;
          });
          callback(null, username);
        })
        .catch((err) => {
          console.log('Got err ', err);
        });
    },
    post: function (data, callback) {
      db.users.sync()
        .then(function () {
          return db.users.create({ UserName: data.username });
        })
        .then(function (data) {
          callback(null, data);
        })
        .catch((err) => {
          callback(err, null);
        });
    }
  }
};
//   db.query(`INSERT INTO Users (UserName) VALUES ('${data.username}')`, function (err, data) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data);
//     }
//   });



