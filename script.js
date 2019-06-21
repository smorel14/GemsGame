let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let colorAray = ["blue", "red", "green", "purple", "yellow"];
let colorArayAndGray = ["blue", "red", "green", "purple", "yellow", "grey"]
let state = 'home';
let nbOfRows = height / 100
let nbOfCols = width / 100
let grid = [];
let $retryButton = document.querySelector('.resetButton');
let $target = document.querySelector('.target');
let goal = 0;
let level = 0;
let accomplished = false;
let interval0
let interval1
let interval2
//$score.innerText


let backgroundMusic = new Audio ()
//backgroundMusic.src = "septahelix.mp3"
backgroundMusic.src = "airtone.mp3"
backgroundMusic.loop = true;
let buttonClicking = new Audio ()
buttonClicking.src ="buttonClicking.mp3"
let decapitation = new Audio()
decapitation.src = "Decapitation.wav"
let bananaSlip = new Audio()
bananaSlip.src = "Banana.wav"

/*
var x = document.getElementById(".septahelixSound"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  septahelix.pause(); 
} 
*/


//sound when removeing squares
function playDecapitation(){
  decapitation.pause();
  decapitation.currentTime = 0
  decapitation.play();
}




for (let i = 0; i < width / 100; i++) {
  grid.push([]);
  for (let j = 0; j < height / 100; j++) {
    grid[i].push(new Square(i, j));
  }
}


// First of all we draw the Home Page
  drawHomePage()
  //When we click on Info/Home/Next/Retry.
  $retryButton.onclick = HomeRetry;
  //Checks ever 0.5 seconds if the level has been accomplished
  //setInterval(() => {
  //}, 500)


  //If a level is selected it goes to that level.
  function gameSetup(grid){
    backgroundMusic.currentTime = 5;
    backgroundMusic.play()
    drawGrid(grid);
    gridColorX()
    $retryButton.innerText = 'HOME'
    removeColor(grid);
    swapSquare();
    drawGrid(grid);

    if(level === 5 || level === 6){
      stopWatch.startClick()
       interval0 = setInterval(() => {
          printTime()
      }, 10)
    }
   


    interval1 = setInterval(() => {
    replaceEmptyGrid(grid);
    drawGrid(grid);
    levelAccomplished()
    failed()
    }, 500)

    interval2 = setInterval(() => {
    removeColor(grid);
    drawGrid(grid);
    },650)
  }



  function HomeRetry(){ 
  if ($retryButton.innerText === "HOME" || $retryButton.innerText === "NEXT"){
    buttonClicking.pause();
    buttonClicking.currentTime = 0
    buttonClicking.play();
    clearInterval(interval0);
    stopWatch.stopClick();
    stopWatch.resetClick()
    $minDec.innerText = '0';
    $minUni.innerText = '0';
    $secDec.innerText = '0';
    secUni.innerText  = '0';
    clearInterval(interval1);
    clearInterval(interval2);
    drawHomePage()
    //$retryButton.onclick = () => {
   //  window.location.href = "/"
   // }
  }
  else if($retryButton.innerText === "Retry"){
    buttonClicking.pause();
    buttonClicking.currentTime = 0
    buttonClicking.play();
    resetAll()
   clearInterval(interval0);
   stopWatch.stopClick();
   stopWatch.resetClick()
   $minDec.innerText = '0';
   $minUni.innerText = '0';
   $secDec.innerText = '0';
   secUni.innerText  = '0';
   $score.innerText = 0;
  }
  else if($retryButton.innerText === "INFO"){
    buttonClicking.pause();
    buttonClicking.currentTime = 0
    buttonClicking.play();
    level = 0;
    infoPage()
  }
  else if($retryButton.innerText === "START"){
    buttonClicking.pause();
    buttonClicking.currentTime = 0
    buttonClicking.play();
    gameSetup(grid);
  }
 
 }








function drawInstructionPage() {
  ctx.save()
  
  // Black Background
  ctx.fillStyle = "blue"
  ctx.fillRect(0,0,width,height)
  
  // Text
  ctx.fillStyle = "white"
  ctx.font = "50px Arial"
  ctx.textAlign = "center"
  ctx.fillText("Instructions:",width/ 2, 100)
  ctx.fillText("Move with arrowkeys", width/ 2, 200)
  ctx.fillText("Press Space to blast", width/ 2, 250)
  ctx.fillText("Press Enter to Start", width/ 2, 400)
  ctx.restore()
}






  function resetAll() {
    $retryButton.innerText = 'HOME'
    gridColorX()
    drawGrid(grid);
    if(level === 5 || level === 6){
      stopWatch.startClick()
       interval0 = setInterval(() => {
          printTime()
      }, 10)
    }
  } 

