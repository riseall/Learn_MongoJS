const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/ShopApp')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const personSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

personSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  firstName: 'Harry',
  lastName: 'Potter',
});

console.log(person.fullName);
