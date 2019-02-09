var db = require('../db');
/*
(err, data) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).json(data);
        }
    }
*/
module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT Text from Messages", function (err, res) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, res); // res is data from database
          // we still need to know the format of res
          // we have to send data to the client which is exactly what they ask for

        }
      });
    }, // a function which produces all the messages
    post: function () { } // a function which can be used to insert a message into the database
    // client post data to server, server send that 'data' to the database
    // we need to know the forget of the data from the client, so that we can pass to the database
    // the data from get and post request should be the same format.
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

