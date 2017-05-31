import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
  description: String,
  ownerID: String
    // date : {type: Date, default: Date.now()}
});

const List = mongoose.model('lists', listSchema);

export default List;