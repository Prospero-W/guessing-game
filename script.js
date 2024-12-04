function minGuess() {
    const minimum = Number(document.querySelector(".min-guess").value);
    console.log("Minimum:", minimum);
}

function maxGuess() {
    const maximum = Number(document.querySelector(".max-guess").value);
    console.log("Maximum:", maximum);
}
let score = 0;
let attempts = 0;
let wins = 0;
function runGuess() {
    const minimum = Number(document.querySelector(".min-guess").value);
    const maximum = Number(document.querySelector(".max-guess").value);

    if (minimum >= maximum) {
        alert("Minimum guess range should be less than Maximum.");
        return;
    }

    const guess = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let scoreBar = document.querySelector(".score-bar");
    let attemptBar = document.querySelector(".attempts-bar");
    let winBar = document.querySelector(".wins-bar");

    let userGuess = Number(document.querySelector(".guess").value);

    // Validate user's guess
    if (isNaN(userGuess) || userGuess < minimum || userGuess > maximum) {
        alert("Your Guess is not in Range or Invalid! Try again.");
        return;
    }

    attempts++;

    if (userGuess > guess) {
        alert("Your Guess is Higher than the Guess Number. Try again!");
    } else if (userGuess < guess) {
        alert("Your Guess is Lower than the Guess Number. Try again!");
    } else {
        alert(`🙌 You got it Correct!😁 The Guess Number was ${guess}`);
        score++;

        // Check if score reaches 100%
        if (score * 10 >= 100) {
            alert("🫵You've Won🏆 This Round! Starting a New Game.");
            wins++;
            score = 0; // Reset score
            winBar.innerHTML = `${wins}`;
        }
    }

    // Update UI
    scoreBar.innerHTML = `${score * 10}%`;
    attemptBar.innerHTML = `${attempts}`;
}

function resetAll() {
    let choice = window.prompt("Do you want to clear your Wins❓️ (y/n)").toLowerCase();

    // Check if the user pressed Cancel or input is empty
    if (choice === null || choice === "") {
        alert("No changes made.");
        return;
    }

    // Check for valid input ("y", "yes", "n", "no")
    if (choice !== "y" && choice !== "yes" && choice !== "n" && choice !== "no") {
        alert("Invalid choice. No changes made.");
        return;
    }

    // Reset wins if the user confirms
    if (choice === "y" || choice === "yes") {
        document.querySelector(".wins-bar").innerHTML = "";
        alert("Wins have been cleared!");
    } else {
        alert("Wins remain unchanged.");
    }

    // Ask to confirm resetting the game state (score, attempts, etc.)
    let confirmReset = confirm("Do you want to reset the game state? (This will clear score and attempts.)");

    if (confirmReset) {
        document.querySelector(".min-guess").value = "";
        document.querySelector(".max-guess").value = "";
        document.querySelector(".guess").value = "";
        document.querySelector(".score-bar").innerHTML = "";
        document.querySelector(".attempts-bar").innerHTML = "";
        alert("Game state has been reset! A New Game It is Then!😉");
    } else {
        alert("Game state remains unchanged.");
    }
}
