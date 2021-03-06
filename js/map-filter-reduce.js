(function () {
	"use strict"

	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];

	// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

	let atLeast3Languages = users.filter(n => n.languages.length > 2)
	console.log(atLeast3Languages)

	// Use .map to create an array of strings where each element is a user's email address

	let userEmails = users.map(n => n.email)
	console.log(userEmails)

	// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

	const totalYears = users.reduce((total, user) => {
		return total + user.yearsOfExperience;
	}, 0);
	let avgYearsOfExperience = totalYears / users.length
	console.log(`Users avg years of experience is: ${avgYearsOfExperience}`);

	// Use .reduce to get the longest email from the list of users.

	const longestEmail = users.reduce((max, user) => {
		return Math.max(max, user.email.length);

	}, 0)

	let longestEmailChar;
	users.forEach(function (user){
		if (user.email.length === longestEmail){
			longestEmailChar = user.email;
		}
	})

	console.log(`The longest email is : ${longestEmailChar} with a length of ${longestEmail} characters`)

	// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

	const namesInString = users.reduce((names, user) => {
		return names += `${user.name}, `;
	}, '')

	console.log(`Your instructors are: ${namesInString}`);

})();