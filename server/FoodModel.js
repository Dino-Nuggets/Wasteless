const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://char:luxray@book-discussions.yu2gk.mongodb.net/wastelessbydn?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'wastelessbydn',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

// const User = new Schema({
//   user: { type: String, default: ''}
//   password: {type: String, default: ''}

//   items: {}

// });

const foodSchema = new Schema({
  user: {type: String, default: ''},
  item: { type: String, default: ''},
  type: { type: String, default: '' },
  quantity: { type: Number, default: 0 },
  date: { type: Date, default: Date.now() },
  price: { type: Number, default: 0 },
  expiration: { type: Date, default: Date.now() + 12096e5 },
  status: { type: String, default: 'to buy' },
  preference: { type: String, default: ''},
  outcome: { type: String, default: ''},
});


const Food = mongoose.model('food', foodSchema);

module.exports = {
  Food,
};
