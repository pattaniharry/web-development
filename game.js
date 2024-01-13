var buttonColours =     ["red" , "blue", "green " , "yellow"];
let gamePattern = new Array();



function nextSequence(){
   var blah = Math.floor(Math.random()*4);
   
   var randomChosenColour  = buttonColours[blah];



gamePattern.push (randomChosenColour);

$ ("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var myAudio = new Audio("sounds/"+ randomChosenColour + ".mp3");
myAudio.play();


};




