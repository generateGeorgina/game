let character = document.getElementById('character');
let block = document.getElementById('block');
let game = document.getElementById('game');
let score = 0;
let scoreElement = document.getElementById('score');



function jumpFunction() {
    // only add class attribute with value animate if it isn't there already
    if (character.classList != 'animate') {
        // Add animate class to the character element when jumpFunction is called
        character.classList.add('animate');
        score++;
        console.log(score);
        scoreElement.innerHTML = "Score: " + score;
    }
    
    // delay by the time it takes for the jump animation to complete and refresh the jump function. Pass in an annonymous function with no parameters and remove the class from the character element in the code block
    setTimeout(function(){
        character.classList.remove('animate');
    }, 500);
};

game.addEventListener('click', jumpFunction);

// check game over at 10ms interval
let checkGameOver = setInterval(function(){
    //get the computed css style value of the top property. parseInt to get the value only without the 'px'
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //if block is character area and character is in the same area at the same time, execute the code block
    if (blockLeft < 40 && blockLeft > 0 && characterTop >= 140) {
        //remove block
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over. Refresh page to play again.");
    }

}, 10);
