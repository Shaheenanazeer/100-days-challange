// / *Question 41:* Magicians: Display magician names from an array.


let magicians: string[] = ["hiba", "areeba", "aliya"];

function show_magicians(magiciansnames: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);