

function drawGrid(grid){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    colorGrid (grid)
    drawGridLines()
}



function colorGrid (grid){
    for (let i = 0; i < width/100; i++){
        for(let j = 0; j < height/100; j++){
          grid[i][j].fillColor();
        }
    }
}

function drawGridLines() {
    for (i = 100; i < width; i += 100) {
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (j = 100; j < height; j += 100) {
      ctx.beginPath();
      ctx.moveTo(0, j);
      ctx.lineTo(width, j);
      ctx.stroke();
    }
  }

