var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll().then( (data) => {
      res.send(data);
    });
  },
  post: function (req, res) {
    var nameText = req.body.username;
    console.log(nameText);
    models.users.create(nameText).then( (data) => {
      console.log('New User Posted to DB Successfully!');
      //res.send(data);
    });



    // BELOW is testing
    // req.body will be JSON. Use req.body
    res.send(req.body);
  }
};
