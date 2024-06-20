// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening");//fortune builder//
let optionOneScreen= document.querySelector(".option-one-screen"); //what to do with 10k//
let optionOneScreenButton = document.querySelector(".option-one");//buy//
let optionOneScreenA=document.querySelector(".option-one-screenA");//what to buy?//
let optionOneScreenButtonA=document.querySelector(".option-one-a");//buy lottery//
let optionOneScreenButtonB=document.querySelector(".option-one-b");//buy pc//
let optionOneScreenAA=document.querySelector(".option-one-screenAA");//car accident//
let optionOneScreenButtonAA=document.querySelector(".option-one-a-a");//drive to redeem//
let optionOneScreenAB=document.querySelector(".option-one-screenAB");//plant fall//
let optionOneScreenButtonAB=document.querySelector(".option-one-a-b");//walk to redeem//
let optionOneScreenB=document.querySelector(".option-one-screenB");//video game addict//
let optionTwoScreen= document.querySelector(".option-two-screen");//what to invest//
let optionTwoScreenButton = document.querySelector(".option-two");//invest//
let optionTwoScreenButtonA=document.querySelector(".option-two-a");//stocks//
let optionTwoScreenButtonB=document.querySelector(".option-two-b");//mutual funds//
let optionTwoScreenA=document.querySelector(".option-two-screenA");//lost all money//
let optionTwoScreenB=document.querySelector(".option-two-screenB");//earned 30k//
let optionTwoScreenButtonBA=document.querySelector(".option-two-b-a");//college//
let optionTwoScreenButtonBB=document.querySelector(".option-two-b-b");//keep investing//
let optionTwoScreenBA=document.querySelector(".option-two-screenBA");//graduate debt free//
let optionTwoScreenBB=document.querySelector(".option-two-screenBB");//lost 7.5k//


optionOneScreenButton.addEventListener("click", function(){
    storyOpening.style.display = "none";
    optionOneScreen.style.display = "block";
});

optionOneScreenButtonA.addEventListener("click", function(){
    optionOneScreen.style.display = "none";
    optionOneScreenA.style.display = "block";
});

optionOneScreenButtonAA.addEventListener("click", function(){
    optionOneScreenA.style.display = "none";
    optionOneScreenAA.style.display = "block";
});

optionOneScreenButtonAB.addEventListener("click", function(){
    optionOneScreenA.style.display = "none";
    optionOneScreenAB.style.display = "block";
});

optionOneScreenButtonB.addEventListener("click", function(){
    optionOneScreen.style.display = "none";
    optionOneScreenB.style.display = "block";
});

optionTwoScreenButton.addEventListener("click", function(){
    storyOpening.style.display = "none";
    optionTwoScreen.style.display = "block";
});

optionTwoScreenButtonA.addEventListener("click", function(){
    optionTwoScreen.style.display = "none";
    optionTwoScreenA.style.display = "block";
});

optionTwoScreenButtonB.addEventListener("click", function(){
    optionTwoScreen.style.display = "none";
    optionTwoScreenB.style.display = "block";
});

optionTwoScreenButtonBA.addEventListener("click", function(){
    optionTwoScreenB.style.display = "none";
    optionTwoScreenBA.style.display = "block";
});

optionTwoScreenButtonBB.addEventListener("click", function(){
    optionTwoScreenB.style.display = "none";
    optionTwoScreenBB.style.display = "block";
});







// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// }); */