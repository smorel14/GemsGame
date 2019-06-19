let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let colorAray = ["blue", "red", "green", "purple", "yellow"];
let colorArayAndGray = ["blue", "red", "green", "purple", "yellow", "gray"]
let state = 'home';
let nbOfRows = height / 100
let nbOfCols = width / 100
let grid = [];
let $retryButton = document.querySelector('.resetButton');
let goal = 0;
let level = 0;
let accomplished = false;
let interval1
let interval2
//$score.innerText



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
    drawGrid(grid);
    gridColorX()
    $retryButton.innerText = 'HOME'
    removeColor(grid);
    swapSquare();
    drawGrid(grid);

    interval1 = setInterval(() => {
      console.log('internaval', interval1);
    replaceEmptyGrid(grid);
    drawGrid(grid);
    levelAccomplished()
    }, 500)

    interval2 = setInterval(() => {
    removeColor(grid);
    drawGrid(grid);
    },650)
  }



  function HomeRetry(){
    console.log('comes here')
 
  if ($retryButton.innerText === "HOME" || $retryButton.innerText === "NEXT"){
    clearInterval(interval1);
    clearInterval(interval2);
    drawHomePage()
    console.log('home')
    //$retryButton.onclick = () => {
   //  window.location.href = "/"
   // }
  }
  else if($retryButton.innerText === "Retry"){
   resetAll()
   $score.innerText = 0;
   console.log('retry')
  }
  else if($retryButton.innerText === "INFO"){
    level = 0;
    console.log('infoPage')
    infoPage()
  }
  else if($retryButton.innerText === "START"){
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






  function playGame(){


    //$retryButton.onclick = resetAll;

 }






  function resetAll() {
    $retryButton.innerText = 'HOME'
    console.log(1, $retryButton.innerText)
    gridColorX()
    console.log(2, $retryButton.innerText)
    drawGrid(grid);
    console.log(3, $retryButton.innerText)
  } 

