/*Joseph Haskins
2 November 2024
Assignment 3.1 Palindrome Checker
//////////////////////////////////////////////////////////////////////////////////
Created on 2 November 2024
version 1
//////////////////////////////////////////////////////////////////////////////////
*/
function Check()
{
// clear previous image if one is present
    document.getElementById("displayImage").style.display = "none";
    document.getElementById("displayImage1").style.display = "none";

//User input from Palindrome HTML
    var receivedWord = document.getElementById("wordCheck").value;

// Splits the word into seperate characters, reverses the order, and rejoins them
    var splitWord = receivedWord.split ("");
    var reverseWord = splitWord.reverse();
    var joinWord = reverseWord.join("");

//Checks if the original word is the same as reversed word, if true displays "PALINDROME" and a picture of tacocat
if(receivedWord === joinWord)
{
    document.getElementById("stringInfo").innerHTML = "PALINDROME";

    var img = document.getElementById("displayImage");
    img.src = "Images/tacoCat.png"; //path to picture
    img.style.display = "block";  //makes image visable
}
//If they do not match, displays "NOT PALINDROME" and a picture of not palindrome
else
{
    document.getElementById("stringInfo").innerHTML = "NOT PALINDROME";

    var img = document.getElementById("displayImage1"); 
    img.src = "Images/palindromeNotPalindrome.png"; //path to picture
    img.style.display = "block"; //makes image visable
}
}