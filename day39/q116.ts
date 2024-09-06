// Question 116: Create a switch case that matches several cases to the same code block, representing seasons. coding karo typescript ma

function getSeason(month: number): string {
    let season: string;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            season = "Invalid month. Please enter a number between 1 and 12.";
    }
    return season;
}

// Example usage:

console.log(getSeason(4)); // Output: Spring

