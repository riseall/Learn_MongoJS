const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: Number,
    genre: String,
    director: String,
});

const Movie = mongoose.model('Movie', movieSchema);

const movie = new Movie({
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 9.3,
    genre: 'Drama',
    director: 'Frank Darabont',
});

movie.save();

console.log(movie);