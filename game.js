let userClickedPattern = new Array();



var buttonColours =     ["red" , "blue", "green " , "yellow"];
let gamePattern = new Array();



function nextSequence(){
   var blah = Math.floor(Math.random()*4);
   
   var randomChosenColour  = buttonColours[blah];



gamePattern.push (randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


playSound(randomChosenColour);


$("div[type=button] ").click(function(){
   var userChosenColour = $(this).attr('id');
   playSound(userChosenColour);
   userClickedPattern.push (userChosenColour);
   console.log(userClickedPattern);
});



};


function playSound(name){
   var myAudio = new Audio("sounds/" + name + ".mp3")
myAudio.play();
 }  ;



