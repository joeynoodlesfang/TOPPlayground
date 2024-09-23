let popUpContent = "Dynamic string msg";

let fizzBuzzTarget = 100;
let currFizzBuzz = 0;
let repeatedTask;

function progressFizzBuzz() {
    
    currFizzBuzz += 1;
    if (currFizzBuzz % 3 == 0 && currFizzBuzz % 5 == 0) {
        return "fizzBuzz (" + currFizzBuzz + ")";
    }
    else if (currFizzBuzz % 3 == 0) {
        return "fizz (" + currFizzBuzz + ")";
    }
    else if (currFizzBuzz % 5 == 0) {
        return "buzz (" + currFizzBuzz + ")";
    }

    else {
        return currFizzBuzz.toString();
    }
    
}

function showPopup() {
    const modal = document.getElementById('myModal');
    const popupMessage = document.getElementById('popupMessage');

    if (currFizzBuzz < fizzBuzzTarget) {
        popupMessage.textContent = progressFizzBuzz();
        modal.classList.add('show');
    
        setTimeout(() => {
            modal.classList.remove('show');
        }, 3000);
    } 
    else {
        clearInterval(repeatedTask); 
        modal.style.display = "none";  // Hide the normal modal

        const completionModal = document.getElementById('completionModal');
        completionModal.style.display = "block";  // Show the new modal
    
        // Optionally, you could add an auto-hide for the completion modal after some time
        setTimeout(() => {
            completionModal.style.display = "none";
        }, 5000);  // Hide the new modal after 5 seconds (optional)
    }


}

// function waitBetweenPopups() {
//     setTimeout(function(){}, 1000);
// }

function fizzBuzz() {
    showPopup();
    repeatedTask = setInterval(() => {
        showPopup();
    }, 4000);
    
}

function promptStart() {
    fizzBuzzTarget = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    // Ensure that a valid number was entered
    if (isNaN(fizzBuzzTarget) || fizzBuzzTarget <= 0) {
        alert("Please enter a valid positive number.");
    } else {
        fizzBuzz();  // Start FizzBuzz after receiving valid input
    }
}
window.onload = promptStart;