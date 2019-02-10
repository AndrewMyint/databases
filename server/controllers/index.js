var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).json(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // message from client is inside req
      models.messages.post(req.body, (err, data) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).json(data);
          // res.status(200).JSON.stringify({objectId : messageId, createdAt: new Date()})
        }
      });
      // with req we got message object from client
      // we use models.messages.post, and put it the database

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).json(data);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (err, data) => {
        if (err) {
          res.sendStatus(400);
        } else {
          // console.log("Controller users post", req.body);
          // console.log("Controller users post", data);
          res.status(200).json(data);
        }
      });
    }
  }
};


