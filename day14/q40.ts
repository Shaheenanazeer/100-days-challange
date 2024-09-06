// Day 14 Challenge:  

// Question 40: Album: Create objects for music albums.



function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Ali zafar", "huqa pani"));
console.log(make_album("Rahat Fateh Ali Khan", "Back 2 love"));
console.log(make_album("Atif Aslam","Doorie", 12));

