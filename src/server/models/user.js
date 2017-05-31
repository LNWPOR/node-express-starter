import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = mongoose.Schema({
  username: String,
  password: String
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('users', userSchema);

export default User;