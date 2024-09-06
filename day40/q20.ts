// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one. ese typescript ma karo
function logFavoriteMovies(movies: string[]): void {
    for (const movie of movies) {
        console.log(movie);
    }
}

// Example array of favorite movies
const favoriteMovies: string[] = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];

// Call the function to log each favorite movie
logFavoriteMovies(favoriteMovies);