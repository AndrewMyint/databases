var db = require('../db');
module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * from Messages', function (err, res) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, res); // res is data from database
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      // generate date for the message
      // var messageDate = new Date()
      db.query(`INSERT INTO Messages SET ?`, message, function (err, data) {
        if (err) {
          console.log('Error from messages.post', err);
        } else {
          callback(null, data);
        }
      });
    }

    // a function which can be used to insert a message into the database
    // client post data to server, server send that 'data' to the database
    // we need to know the forget of the data from the client, so that we can pass to the database
    // the data from get and post request should be the same format.
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT UserName FROM Users', function (err, data) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
    },
    post: function (data, callback) {
      db.query(`INSERT INTO Users (UserName) VALUES ('${data.username}')`, function (err, data) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
    }
  }
};

