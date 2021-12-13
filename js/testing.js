function isEvenOrOdd(num){
    if(num % 2 == 0) {
        alert(`The number ${num} is Even`);
    } else {
        alert(`The number ${num} is Odd`);
    }
}

function numPlus100(num){
    alert(`Your number ${num} plus 100 = ${parseInt(num) + 100}`);
}

function isNegOrPos(num){
    if (num > 0){
        alert(`Your number ${num} is Positive`);
    } else if (num < 0) {
        alert(`You number ${num} is Negative`);
    } else {
        alert("Please enter a positive or negative number!");
    }
}

function userPrompt(){
    let userConfirm = confirm("Do you want to enter a num");
    if (userConfirm === true){
        let userNum = prompt("Please enter a number");
        isEvenOrOdd(userNum);
        numPlus100(userNum);
        isNegOrPos(userNum);
    } else {
        alert("Goodbye");
    }
}

userPrompt();