var List = require('../models/list');

module.exports.getAll = function(req,res){
    List.find(function(err, lists ) {
        if (err)
            res.send(err)
        res.json(lists);
    });
}

module.exports.getById = function(req,res){
    List.findOne({ _id: req.params.id }, function(err, list) {
      if (err) return console.error(err);
        res.json(list);
    });
}

module.exports.add = function(req,res){
    var list = new List(req.body);
    list.save(function(err) {
      if (err) {
        return res.send(err);
      }
    });
}

module.exports.edit = function(req,res){
    List.findOne({ _id: req.params.id }, function(err, list) {
      if (err) {
        return res.send(err);
      }

      list.description = req.params.description;

      // save the movie
      list.save(function(err) {
        if (err) {
          return res.send(err);
      }
      });
    });
}

module.exports.remove = function(req,res){
    List.remove({_id: req.params.id}, function(err,list ) {
      if (err) {
        return res.send(err);
      }
    });
}
