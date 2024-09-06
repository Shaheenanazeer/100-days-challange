// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one. ese typescript ma karo
function logFavoriteMovies(movies) {
    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
        var movie = movies_1[_i];
        console.log(movie);
    }
}
// Example array of favorite movies
var favoriteMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
// Call the function to log each favorite movie
logFavoriteMovies(favoriteMovies);
