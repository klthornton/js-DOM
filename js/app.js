/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var divElem = document.getElementById("name1");
divElem.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var divElem = document.getElementById("position2");
divElem.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var divElem = document.getElementById("alias3");
divElem.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var divElem = document.getElementsByClassName("profile");
divElem[0].innerHTML = "Diamonds and Pearls";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var divElem = document.getElementsByClassName("profile");
divElem[1].innerHTML = "Mistakes are always forgivable, if one has the courage to admit them.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var divElem = document.getElementsByClassName("alias");
divElem[2].innerHTML = "Russell Franklin";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var newDiv = document.createElement("div");
newDiv.id = "name7";
newDiv.innerHTML = "Peter Griffin";

var nameParentDiv = document.getElementById("nameParent");
nameParentDiv.appendChild(newDiv);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

