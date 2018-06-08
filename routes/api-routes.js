
var db = require("../models");

module.exports = function(app) {

app.post("/api/posts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    console.log('creating post');

    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(function(dbPost){
      res.json(dbPost)
    });

  });
}
