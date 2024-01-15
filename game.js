let userClickedPattern = new Array();



var buttonColours =     ["red" , "blue", "green" , "yellow"];
let gamePattern = new Array();


var level = 0;
var started = false;

$(document).keydown(function(event){
   if(!started){
      $("#level-title").text("level " + level);
      nextSequence();
      started = true;
      
   }
   });
      
   $("div[type=button] ").click(function(){
      var userChosenColour = $(this).attr('id');
      playSound(userChosenColour);
      userClickedPattern.push (userChosenColour);
      console.log(userClickedPattern);
      animatePress(userChosenColour);
      checkAnswer(userClickedPattern.length-1);
   });


function nextSequence(){
   
   var blah = Math.floor(Math.random()*4);
   var randomChosenColour  = buttonColours[blah];

gamePattern.push (randomChosenColour);
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);



 
$("#level-title").text("level " + level);

level++;


};


function playSound(name){
   var myAudio = new Audio("sounds/" + name + ".mp3")
   myAudio.play();
    } ;

 
function animatePress(currentColour){
   var ToAnimate = $('#' + currentColour);
   ToAnimate.addClass("pressed");

setTimeout(function()  {
   var ToAnimate = $('#' +currentColour);
   ToAnimate.removeClass("pressed");
}, 100);
};


function checkAnswer(currentlevel){

   if(gamePattern.length-1 == userClickedPattern.length-1){

      if(gamePattern.toString() == userClickedPattern.toString()){
        

         setTimeout(nextSequence,1000);
         userClickedPattern.length = 0;
      
   } else{
      var myAudio = new Audio("sounds/wrong.mp3");
      myAudio.play();

      $("body").addClass("game-over")

      setTimeout(function() {
         $("body").removeClass("game-over")
      }, 200);
      
      $("h1").text("Game over Press Any Key to Restart");
      startover()
   };
  
};
};

function startover(){
   level = 0;
   gamePattern.length = 0;
   started = false;
   userClickedPattern.length = 0;
}
