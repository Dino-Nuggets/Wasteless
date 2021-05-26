const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://char:luxray@book-discussions.yu2gk.mongodb.net/wastelessbydn?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'wastelessbydn'
  })
  .then(() => console.log('Connected to Mongo DB. -UserModel'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const userSchema = new Schema({
  user: {type: String, default: ''},
  password: {type: String, default: ''},
  budget: {type: Number, default: 0}
});



const User = mongoose.model('user', userSchema); //in the docs says only two parameters, originally provided with three parameters, the third being the schema name?

module.exports = {
  User,
};
