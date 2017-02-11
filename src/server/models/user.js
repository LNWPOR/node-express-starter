import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

let userSchema = mongoose.Schema({
  username: String,
  password: String
});
userSchema.plugin(passportLocalMongoose);

let User = mongoose.model('users', userSchema);

export default mongoose.model('users', userSchema);