import List from '../models/list';

export const getAll = (req,res) => {
  List.find((err, lists ) => {
    if (err)
        res.send(err)
    res.json(lists);
  });
}

export const getById = (req,res) => {
  List.findOne({ _id: req.params.id }, (err, list) => {
    if (err) return console.error(err);
      res.json(list);
  });
}

export const add = (req,res) => {
  var list = new List(req.body);
  list.save((err) => {
    if (err) {
      return res.send(err);
    }
  });
}

export const edit = (req,res) => {
  List.findOne({ _id: req.params.id }, (err, list) => {
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

export const remove = (req,res) => {
  List.remove({_id: req.params.id}, (err, list) => {
    if (err) {
      return res.send(err);
    }
  });
}