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
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true}, //beautiful
  budget: {type: Number, default: 0}
});



module.exports = mongoose.model('user', userSchema); 

// module.exports = {
//   User,
// };
