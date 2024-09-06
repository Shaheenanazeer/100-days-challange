// *Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// This profile sets itself up and can share info about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "samra";
    var age = 16;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
