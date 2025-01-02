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

personSchema.pre('save', async function () {
  this.firstName = 'Luna';
  this.lastName = 'Lovegood';
  console.log('Persiapan Menyimpan data');
});

personSchema.post('save', async function () {
  console.log('Data tersimpan');
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  firstName: 'Ron',
  lastName: 'Weasley',
});

console.log(person);

person
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
