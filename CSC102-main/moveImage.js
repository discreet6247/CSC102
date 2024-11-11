var changeX = 5; // Horizontal movement step
var changeY = 3; // Vertical movement step
var intervalidID = 0;
var mySound;

function intervalStart() {
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
  

    mySound = new sound("sounds/drone.mp3");//sources audio file to play
    mySound.play();//plays audio file sourced above

    
    var image = document.getElementById("imgMeme");

    // Start the interval to move the image
    intervalidID = setInterval(function() {
        // Get the current position of the image (parse the style values)
        var left = parseInt(image.style.left || 100); // Default to 0 if not set
        var top = parseInt(image.style.top || 100);  // Default to 0 if not set

        // Get the width and height of the window (viewport)
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;

        // Check if the image reaches the right or left edge (reverse horizontal direction)
        if (left + image.offsetWidth >= screenWidth || left <= 0) {
            changeX = -changeX; // Reverse horizontal direction
        }

        // Check if the image reaches the top or bottom edge (reverse vertical direction)
        if (top + image.offsetHeight >= screenHeight || top <= 0) {
            changeY = -changeY; // Reverse vertical direction
        }

        // Update the position of the image
        image.style.left = (left + changeX) + "px";  // Move horizontally
        image.style.top = (top + changeY) + "px";    // Move vertically

        // Update position display
        document.getElementById("XandY").innerHTML = "x = " + (left + changeX) + " y = " + (top + changeY);

    }, 15); // Interval of 15ms
}

function intervalStop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(intervalidID);

    if (mySound) {
        mySound.stop();  // Stop the sound and reset it
    }
    //window.location.reload();//reloads page, effectively "stopping" anything being played and reseting to a fresh page

}

function sound(src)
{//add play function. Helper function
	this.sound = document.createElement("audio"); //create audio
	this.sound.src = src;//define src
	this.play = function() {//music function
	this.sound.play();//play sound
    this.stop = function()
    {
        this.sound.pause();
        this.sound.currentTime = 0;
    }
	}
}
