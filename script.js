const choices = ['Rock', 'Paper', 'Scissors'];


function computerPlay() { 
    let random = Math.floor(Math.random() * choices.length); // Generates a random number from 0 to choices.length-1 (because the last digit is not included in Math.random)
    return choices[random]; // Returns one of the choices defined in choices :D
}

