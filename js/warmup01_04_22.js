"use strict";

(function () {
//TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

	function isOdd(n) {
		for (let i = 0; i <= n; i++) {
			if (i % 2 === 1) {
				console.log(i);
			}
		}
	}

	//
	// isOdd(10);
	// isOdd(20);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

	function evenOdd(n) {
		for (let i = 0; i <= n; i++) {
			if (i % 2 === 0) {
				console.log(`This is an even iteration ${i}`);
			} else {
				console.log(`This is an odd iteration ${i}`);
			}
		}
	}

	//
	// evenOdd(20);

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

	function getPassword() {
		let pass = "123";
		let attemptsAllowed = 3
		for (let i = 0; i < attemptsAllowed; i++) {
			let userInput = prompt("Enter Password");
			if (userInput === null) { //checks if user cancelled prompt
				alert("Process Cancelled!")
				break;
			}
			if (userInput === pass) { // checks if user input is equal to password
				alert("Login Successful!");
				break;
			} else if (i < 2) { // checks if user has more tries
				alert(`Please try again!\nYou have ${2 - i} attempts left`);
			} else { // user reached max attempts
				alert("Max Attempts Reached!");
				return;
			}
		}
	}

	// getPassword();

// 	Mini Exercise
// 	-Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
// 	-Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// 	-Invoke your function and pass favoriteArtists as an argument

	let favoriteArtist = ["John", "Mike", "Larry", "Henry", "James"];
	function artistArray(arr){
		console.log(arr[0]);
		console.log(arr[2]);
		console.log(arr[arr.length -1]);
	}

	artistArray(favoriteArtist);



})
();