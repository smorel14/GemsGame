let boxClicked = [];


function swapSquare() {
  document.onclick = click => {

    document.body.requestFullscreen()

    //change the Home button to Retry.


   // canvas.requestFullscreen()
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let sclaeY = canvas.height / rect.height;
    let possitionX = Math.floor(((click.clientX - rect.left) * scaleX) / 100);
    let possitionY = Math.floor(((click.clientY - rect.top) * sclaeY) / 100);
    if(possitionX < 0 || possitionY < 0 || possitionX > 6 || possitionY > 8){
      return
    }
    buttonClicking.pause();
    buttonClicking.currentTime = 0
    buttonClicking.play();
    let grid1 = grid[possitionX][possitionY]
    grid1.isSelected = true;

    $retryButton.innerText = 'Retry'

    if (boxClicked.length === 0) {
      boxClicked.push(possitionX);
      boxClicked.push(possitionY);
    } 
    else if(grid[possitionX][possitionY] === grid[boxClicked[0]][boxClicked[1]]){
      // keeps the current box sellected.
      grid1.isSelected = true;
    }
    else {
      let grid2 = grid[boxClicked[0]][boxClicked[1]];
      if (
        (Math.pow(possitionX - boxClicked[0], 2) === 1 &&
          Math.pow(possitionY - boxClicked[1], 2) === 0) ||
        (Math.pow(possitionX - boxClicked[0], 2) === 0 &&
          Math.pow(possitionY - boxClicked[1], 2) === 1)) 
      {
        let square1 = grid[possitionX][possitionY];
        let square2 = grid[boxClicked[0]][boxClicked[1]];
        let color = square1.color;
        square1.color = square2.color;
        square2.color = color;
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(grid);
        grid[boxClicked[0]][boxClicked[1]].isSelected = false;
        grid[possitionX][possitionY].isSelected = false;
        boxClicked = [];
        changeBack (grid, grid1, grid2);
      } 
      else {
        grid[boxClicked[0]][boxClicked[1]].isSelected = false;
        boxClicked = [];
        boxClicked.push(possitionX);
        boxClicked.push(possitionY);
        //   console.log ("clicked on a box you can't click on")
      }
    }
  }
}


function changeBack (grid, grid1, grid2){
setTimeout(() => {
let color1 = ''
let color2 = ''
let color3 = ''

  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j <grid[0].length; j++){
        if(i < grid.length - 2){
          color1 = grid[i][j].color;
          color2 = grid[i+1][j].color;
          color3 = grid[i+2][j].color;
          if(color1 === color2 && color1 === color3){
            return;
          }
        }
        if(j < grid[0].length - 2){
          color1 = grid[i][j].color;
          color2 = grid[i][j+1].color;
          color3 = grid[i][j+2].color;
          if(color1 === color2 && color1 === color3){
            return;
          }
        }
    }
  }

  color1 = grid1.color;
  grid1.color = grid2.color;
  grid2.color = color1; 
  // sound for switch back;
  
  bananaSlip.pause();
  bananaSlip.currentTime = -1
  bananaSlip.play();
  },200)
}