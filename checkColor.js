
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
  if(whiteArray[i].color === 'gray'){
    $score.innerHTML = Number($score.innerHTML) + Number(points)
    console.log($score.innerHTML)
  }
  whiteArray[i].color = 'white';
}
}











function replaceEmptyGrid(grid){

if(level != 2 && level !=3){
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
        grid[i][j].color = colorAray[Math.floor(Math.random() * 5)];
      }
    }
  }
}

// this this just for level 2 and 3, so that there are random gray points that also apear.
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
        grid[i][j].color = colorArayAndGray[Math.floor(Math.random() * 6)];
      }
    }
  }
}


}
 


/*


function checkColorRow(grid) {
  // FIRST CHECKS AND CHANGES ROWS
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let X1 = grid[i][j].x;
      let Y1 = grid[i][j].y;
      let color1 = grid[i][j].color;
      let color2 = grid[i + 1][j].color;
      let color3 = grid[i + 2][j].color;
      if (color1 === color2 && color1 === color3) {
        //checks if there are more than 3 boxes that are in a row and share the same color.
        let m = 3;
        while (i + m < nbOfCols && grid[i][j].color === grid[i + m][j].color ) {
          m++;
        }
        // check for each line above the link with the same color boxes.
        for (let row = j; row >= 1; row--) {
          // copys the color of the box above
          for (let col = i; col < i + m; col++) {
            grid[col][row].color = grid[col][row - 1].color;
          }
        }
        // give a new random color to the top row.
        for (let col = i; col < i + m; col++) {
          grid[col][0].color = colorAray[Math.floor(Math.random() * 5)];
        }
      }
    }
  }
}

function checkColorCol(grid) {
  //CHECKS AND CHANGES COLUMNS
for(let i = 0; i < grid.length; i++){
  for (let j = 0; j < grid[i].length - 2; j++){
    let color1 = grid[i][j].color;
    let color2 = grid[i][j+1].color;
    //console.log(grid[i][j+2].color)
    let color3 = grid[i][j+2].color;
    if (color1 === color2 && color1 === color3){
      // check if there are more than 3 boxes that are in a column and share the same color
      let m = 3;
      while(j+m < nbOfRows && grid[i][j].color === grid[i][j+m].color){
        m++;
      }
      //copy the color of the box 3 boxes above
      for (let row = j + m - 1; row >= 0; row--){
       // console.log (j, row, )
        if(row > m - 1){
          grid[i][row].color = grid[i][row-m].color;
        }
        else{
          grid[i][row].color = colorAray[Math.floor(Math.random() * 5)];
        }
      }
    }


  }
}


}

*/