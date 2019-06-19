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


for (let i = 0; i < width / 100; i++) {
  grid.push([]);
  for (let j = 0; j < height / 100; j++) {
    grid[i].push(new Square(i, j));
  }
}



// First of all we draw the Home Page
  drawHomePage()



//If level 1 is sellected go to level 1;
  function gameSetup(grid){
    drawGrid(grid);
    gridColorX()
    playGame()
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
    $retryButton.innerText = 'HOME'
    removeColor(grid);
    swapSquare();
    drawGrid(grid);
    setInterval(() => {
    replaceEmptyGrid(grid);
    drawGrid(grid);
    }, 500)

    setInterval(() => {
    removeColor(grid);
    drawGrid(grid);
    },650)

    //$retryButton.onclick = resetAll;

    $retryButton.onclick = HomeRetry;

    function HomeRetry(){
    if ($retryButton.innerText === "HOME"){
      //drawHomePage()
      console.log('home')
     // $retryButton.onclick = () => {
      window.location.href = "/"
     // }
    }
    else if($retryButton.innerText === "Retry"){
     resetAll()
     console.log('retry')
    }
  }
 }



  function resetAll() {
    $retryButton.innerText = 'HOME'
    console.log(1, $retryButton.innerText)
    gridColorX()
    console.log(2, $retryButton.innerText)
    drawGrid(grid);
    console.log(3, $retryButton.innerText)
  } 

