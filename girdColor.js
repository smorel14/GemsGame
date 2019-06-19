

function gridColorX(){

  if(level === 1){
    goal = 300;
    gridColor();
    grid[0][5].color = 'gray';
    grid[1][6].color = 'gray';
    grid[2][5].color = 'gray';
    grid[4][3].color = 'gray';
    grid[5][3].color = 'gray';
    grid[6][4].color = 'gray';
  }

  if(level === 2){
    goal = 600;
    gridColor();
    grid[0][0].color = 'gray';
    grid[1][1].color = 'gray';
    grid[2][1].color = 'gray';
    grid[4][1].color = 'gray';
    grid[5][3].color = 'gray';
    grid[6][4].color = 'gray';
    grid[0][0].color = 'gray';
    grid[1][1].color = 'gray';
    grid[2][1].color = 'gray';
    grid[4][1].color = 'gray';
    grid[5][3].color = 'gray';
    grid[6][4].color = 'gray';
  }

  if(level === 3){
    goal = 600;
    gridColor();
    grid[0][0].color = 'gray';
    grid[1][1].color = 'gray';
    grid[2][1].color = 'gray';
    grid[4][1].color = 'gray';
    grid[5][3].color = 'gray';
    grid[6][4].color = 'gray';
    grid[0][0].color = 'gray';
    grid[1][1].color = 'gray';
    grid[2][1].color = 'gray';
    grid[4][1].color = 'gray';
    grid[5][3].color = 'gray';
    grid[6][4].color = 'gray';
  }

  if(level === 4){
    goal = 1200;
  gridColor();
  grid[1][0].color = 'gray';
  grid[4][4].color = 'gray';
  grid[5][6].color = 'gray';
  grid[6][3].color = 'gray';
  grid[3][3].color = 'gray';
  grid[2][4].color = 'gray';
  grid[2][1].color = 'gray';
  }

  if(level === 5){
    goal = 600;
  gridColor();
  grid[1][0].color = 'gray';
  grid[4][4].color = 'gray';
  grid[5][6].color = 'gray';
  grid[6][3].color = 'gray';
  grid[3][3].color = 'gray';
  grid[2][4].color = 'gray';
  grid[2][1].color = 'gray';
  }

  if(level === 6){
    goal = 300;
  gridColor();
  grid[1][0].color = 'gray';
  grid[4][4].color = 'gray';
  grid[5][6].color = 'gray';
  grid[2][0].color = 'gray';
  }

  if(level === 7){
    goal = 300;
    gridColor();
    grid[1][0].color = 'gray';
    grid[4][4].color = 'gray';
    grid[5][6].color = 'gray';
  }

  if(level === 8){
    goal = 400;
    gridColor();
    grid[1][0].color = 'gray';
    grid[4][4].color = 'gray';
    grid[5][6].color = 'gray';
    grid[0][0].color = 'gray';
  }

  if(level === 9){
    goal = 500;
    gridColor();
    grid[1][0].color = 'gray';
    grid[3][4].color = 'gray';
    grid[5][6].color = 'gray';
    grid[6][0].color = 'gray';
    grid[6][3].color = 'gray';
  }
}




function gridColor(){
grid[0][0].color = 'blue';
grid[0][1].color = 'green';
grid[0][2].color = 'yellow';
grid[0][3].color = 'purple';
grid[0][4].color = 'green';
grid[0][5].color = 'green';
grid[0][6].color = 'yellow';
grid[0][7].color = 'blue';
grid[0][8].color = 'red';

grid[1][0].color = 'blue';
grid[1][1].color = 'purple';
grid[1][2].color = 'green';
grid[1][3].color = 'yellow';
grid[1][4].color = 'blue';
grid[1][5].color = 'green';
grid[1][6].color = 'blue';
grid[1][7].color = 'green';
grid[1][8].color = 'blue';

grid[2][0].color = 'green';
grid[2][1].color = 'purple';
grid[2][2].color = 'blue';
grid[2][3].color = 'green';
grid[2][4].color = 'blue';
grid[2][5].color = 'blue';
grid[2][6].color = 'red';
grid[2][7].color = 'purple';
grid[2][8].color = 'blue';

grid[3][0].color = 'yellow';
grid[3][1].color = 'yellow';
grid[3][2].color = 'green';
grid[3][3].color = 'blue';
grid[3][4].color = 'red';
grid[3][5].color = 'green';
grid[3][6].color = 'blue';
grid[3][7].color = 'purple';
grid[3][8].color = 'purple';

grid[4][0].color = 'blue';
grid[4][1].color = 'red';
grid[4][2].color = 'purple';
grid[4][3].color = 'green';
grid[4][4].color = 'green';
grid[4][5].color = 'purple';
grid[4][6].color = 'red';
grid[4][7].color = 'blue';
grid[4][8].color = 'red';

grid[5][0].color = 'red';
grid[5][1].color = 'yellow';
grid[5][2].color = 'purple';
grid[5][3].color = 'blue';
grid[5][4].color = 'purple';
grid[5][5].color = 'blue';
grid[5][6].color = 'green';
grid[5][7].color = 'purple';
grid[5][8].color = 'yellow';

grid[6][0].color = 'purple';
grid[6][1].color = 'purple';
grid[6][2].color = 'blue';
grid[6][3].color = 'green';
grid[6][4].color = 'yellow';
grid[6][5].color = 'green';
grid[6][6].color = 'blue';
grid[6][7].color = 'yellow';
grid[6][8].color = 'blue';

/*
grid[1][0].color = 'gray';
grid[4][4].color = 'gray';
grid[5][6].color = 'gray';
grid[2][0].color = 'gray';
grid[3][1].color = 'gray';
*/

}