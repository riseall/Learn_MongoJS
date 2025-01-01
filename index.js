const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: Number,
  genre: String,
  director: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// const movie = new Movie({
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     rating: 9.3,
//     genre: 'Drama',
//     director: 'Frank Darabont',
// });

// Melihat data
// Movie.findById("67741c0b4ea062817761dda7")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//Update Data
// Movie.updateMany({ year: { $lt: 2000 } }, { rating: 7.5 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Update by ID
Movie.findByIdAndUpdate(
  "67741c0b4ea062817761dda8",
  { rating: 9.5 },
  { new: true }
)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Movie.insertMany([
//     {
//         title: 'The Shawshank Redemption',
//         year: 1994,
//         rating: 9.3,
//         genre: 'Drama',
//         director: 'Frank Darabont',
//     },
//     {
//         title: 'The Godfather',
//         year: 1972,
//         rating: 9.2,
//         genre: 'Crime',
//         director: 'Francis Ford Coppola',
//     },
//     {
//         title: 'Pulp Fiction',
//         year: 1994,
//         rating: 8.9,
//         genre: 'Crime',
//         director: 'Quentin Tarantino',
//     },
//     {
//         title: 'The Dark Knight',
//         year: 2008,
//         rating: 9.0,
//         genre: 'Action',
//         director: 'Christopher Nolan',
//     },]).then((result) => {
//         console.log('It worked!');
//         console.log(result);
//     }).catch((error) => {
//         console.error('Error inserting data:', error);
//     });
