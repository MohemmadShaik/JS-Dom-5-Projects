//4 Pillars of JS-DOM
/* 
   1. Selection of an Element
   2. Changing HTML
   3. Changing CSS
   4. Event Listener
*/

//1.Selection of an Element of HTML file in JS
var a = document.querySelector("h1");

//2. Changing html file element content: Here <h1> text available in index.html file is changed from Hindi to Telugu language
a.innerHTML = "Pada Explore cheddam JS-DOM ni..."

//1.Selection of an Element of HTML file in JS
var b = document.querySelector("p");
//2. Changing html file element content : Here <P> text in the index.html file is changed
b.innerHTML = "Now the above line is in Telugu Language."

//3. Changing CSS 
a.style.color = "red";
a.style.backgroundColor ="black"

b.style.backgroundColor = "yellow"

//4. Event Listener
/* Here 2 steps required :
   STEP1 : Selecting the element available in HTML file.
   STEP2 : And then adding Event Listener to that selected element.
*/
// STEP1: Selecting the second paragraph using its ID
var c = document.querySelector("#secondParagraph");
c.style.cursor = "pointer"
//STEP2 : Adding Event Listener to var c  
c.addEventListener("click", function(){
    c.innerHTML = "<b>Now &lt;p&gt; is clicked so its changed the color to yellow with bg-color : black.</b>"
    c.style.backgroundColor = "gold"
    c.style.color = "green"
    
})

//STEP1 : Selecting element of the html file.
var d = document.querySelector("h6");
d.style.cursor = "pointer"
//STEP2 : Adding Event Listener to var d
d.addEventListener("click", function(){
    //d.style.backgroundColor = "maroon";
    d.style.color = "maroon";
    d.style.fontSize = "24px";  // Set font size to 24
})