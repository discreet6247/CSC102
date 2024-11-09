/*Joseph Haskins
2 November 2024
Assignment 3.2 User Input Validation
//////////////////////////////////////////////////////////////////////////////////
Created on 2 November 2024
version 1
//////////////////////////////////////////////////////////////////////////////////
*/
function validate()
{
    //clear previous status
    document.getElementById ("inputStatus").innerHTML = "";

    //Retrieve month and day input values
    var month = document.getElementById ("month").value;
    var day = document.getElementById ("day").value; 

    //Retrieve first name value
    var fName = document.getElementById ("fName").value
    
    //Converts month and day string into number inputs
    var monthNum = +month;
    var dayNum = +day;

    //array of names to convert month number into the corosponding month
    var monthNames = 
                  [ "January", "February", "March", "April", "May", "June", 
                   "July", "August", "September", "October", "November", "December"];
    
    //Checks values of first name input: must not be empty and only contain letters
if ((fName === "") || (!/^[a-zA-Z]+$/.test(fName)))
{
    document.getElementById ("inputStatus").innerHTML = "Please enter a valid name";
    return; //exit function if it fails
}
//Check character length.  Must be 20 or less characters
else if (fName.length > 20)
{
    document.getElementById ("inputStatus").innerHTML = "Name input too long.  Must be 20 characters or less";
    return; //exit function if it fails
}

//check for valid month range. Must be 1-12
    if (monthNum < 1 || monthNum > 12) //Looks like its fixed. converted string into a number 
    {
        document.getElementById ("inputStatus").innerHTML = "Month must be between 1 and 12";
        return;
    }
    //check for days in month under 31.  Leap year not included. Feb is allowed to have 29 currently
    else if ((monthNum === 2 && dayNum > 29) || ((monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) && dayNum > 30))
    {
        document.getElementById ("inputStatus").innerHTML = "Are you sure there are that many days in that month?";
        return; //exit function if it fails
    }   
    else if (dayNum < 1 || dayNum > 31)
    {
        //Check for valid date range 1-31. days under 31 filtered out in the above if statment
        document.getElementById ("inputStatus").innerHTML = "Day must be between 1 and 31";
        return; //exit function if it fails
    }
    else{
        //if all inputs are valid, display "Name Month Day" && image
        var monthName = monthNames[monthNum - 1];
        document.getElementById ("inputStatus").innerHTML = fName + " " + monthName + " " + dayNum;
   
        //display image by updating the src
        var img = document.getElementById("displayImage");
        img.src = "Images/topHatQuail.png";
        img.style.display = "block";
    }
}

function sound(src)
{//add play function. Helper function
	this.sound = document.createElement("audio"); //create audio
	this.sound.src = src;//define src
	this.play = function() {//music function
	this.sound.play();//play sound
	}
}

function eagle()
{
    mySound = new sound("sounds/eagleCall.mp3");
    mySound.play();
}

function redTail()
{
    mySound = new sound ("sounds/redTailHawkSound.mp3");
    mySound.play();
}

function stop()
{
    window.location.reload();
}