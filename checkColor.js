
let points = 100;
let $score = document.querySelector('.score');





function removeColor(grid) {
  // FIRST CHECKS AND CHANGES ROWS

  let whiteArray = [];
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let X1 = grid[i][j].x;
      let Y1 = grid[i][j].y;
      //let color1 = grid at possition x + 1, and x + 2
      let color1 = grid[i][j].color;
      let color2 = grid[i + 1][j].color;
      let color3 = grid[i + 2][j].color;
      if (color1 === color2 && color1 === color3 && color1 != 'white') {
        //checks if there are more than 3 boxes that are in a row and share the same color.
        let m = 3;
        while (i + m < nbOfCols && grid[i][j].color === grid[i + m][j].color ) {
          m++;
        }
          // copys the color of the box above
          for (let col = i; col < i + m; col++) {
            whiteArray.push(grid[col][j]);
          }
      }
    }
  }

  //CHECKS AND CHANGES COLUMNS
for(let j = 0; j < grid[0].length - 2; j++){
  for (let i = 0; i < grid.length; i++){
    let posx = i;
    let posy = j;
    let color1 = grid[i][j].color;
    let color2 = grid[i][j+1].color;
    //console.log(grid[i][j+2].color)
    let color3 = grid[i][j+2].color;
    if (color1 === color2 && color1 === color3){
      console.log(color1, color2, color3);
      console.log('cordinates',i,j)
      // check if there are more than 3 boxes that are in a column and share the same color
      let m = 3;
      while(j+m < nbOfRows && grid[i][j].color === grid[i][j+m].color){
        m++;
      }
      //copy the color of the box 3 boxes above
      for (let row = j + m - 1; row >= j; row--){
      console.log('row', j, 'm', m)
      // console.log (j, row, )
          whiteArray.push(grid[i][row]);
      }
    }
  }
}

// points is the points given for every gray square you get rid of.
for(let i = 0; i < whiteArray.length; i++){
  if(whiteArray[i].color === 'grey'){
    $score.innerText = Number($score.innerText) + Number(points)
    console.log($score.innerHTML)
  }
  playDecapitation()
  whiteArray[i].color = 'white';
  console.log('i&j', whiteArray[i].x, whiteArray[i].y)
  explosion(whiteArray[i].x,whiteArray[i].y)
}
}











function replaceEmptyGrid(grid){

if(level!=2 && level!=5 && level!=6 && level !=8){
  console.log('position1')
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 0; i < grid.length; i++) {
      if(grid[i][j].color === 'white' && j != 0){
        for(let k = j; k >= 1; k--){
          grid[i][k].color = grid[i][k-1].color;
        }
          grid[i][0].color = colorAray[Math.floor(Math.random() * 5)];
      }
      else if(grid[i][j].color === 'white' && j === 0){
        grid[i][0].color = colorAray[Math.floor(Math.random() * 5)];
      }
    }
  }
}

// this this just for level 2 and 3, so that there are random grey points that also apear.
else{
  console.log('position2')
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 0; i < grid.length; i++) {
      if(grid[i][j].color === 'white' && j != 0){
        for(let k = j; k >= 1; k--){
          grid[i][k].color = grid[i][k-1].color;
        }
          grid[i][0].color = colorArayAndGray[Math.floor(Math.random() * 6)];
      }
      else if(grid[i][j].color === 'white' && j === 0){
        grid[i][0].color = colorArayAndGray[Math.floor(Math.random() * 6)];
      }
    }
  }
}


}
 

