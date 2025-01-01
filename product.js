const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/ShopApp')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  condition: {
    type: String,
    enum: ['baru', 'bekas'],
    default: 'baru',
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Nilai Minimal adalah 0'],
  },
  availability: {
    online: {
      type: Boolean,
      required: true,
    },
    offline: {
      type: Boolean,
      required: true,
    },
  },
});

productSchema.methods.outStock = function () {
  this.stock = 0;
  this.availability.online = false;
  this.availability.offline = false;
  return this.save();
};

const Product = mongoose.model('Product', productSchema);

const changeStock = async () => {
  const foundProduct = await Product.findById('67755cecd85df514b22194f3');
  foundProduct.outStock();
  console.log('berhasil diubah');
};

changeStock();

// const product = new Product({
//   name: "Kemeja Flanel",
//   brand: "Hollister",
//   price: 750000,
//   color: "biru muda",
//   size: ["S", "M", "L"],
//   description:
//     "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
//   condition: "baru",
//   stock: 25,
//   availability: {
//     online: true,
//     offline: true,
//   },
// });

// product
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Product.findOneAndUpdate(
//   { name: 'Kemeja Flanel' },
//   {
//     name: 'Kemeja Flanel',
//     brand: 'Hollister',
//     price: 750000,
//     color: 'biru muda',
//     size: ['S', 'M', 'L'],
//     description:
//       'Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.',
//     condition: 'baru',
//     stock: -25,
//     availability: {
//       online: true,
//       offline: true,
//     },
//   },
//   { new: true, runValidators: true },
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.errors.stock.message);
//   });
