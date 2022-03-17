var models = require('../models');

module.exports = {
  get: function (req, res) {
    // a function which handles a get request for all messages
    models.messages.getAll().then( (data) => {
      res.send(data);
    });
  },
  post: function (req, res) {
    // a function which handles posting a message to the database

    // the message from the HTTP request
    var messageText = req.body.message;
    console.log(messageText);
    models.messages.create(messageText).then( (data) => {
      console.log('Message Posted to DB Successfully!');
      //res.send(data);
    });



    // BELOW is testing
    // req.body will be JSON. Use req.body
    res.send(req.body);
  }
};
