let accomplished1 = false;
let accomplished2 = false;
let accomplished3 = false;
let accomplished4 = false;
let accomplished5 = false;
let accomplished6 = false;
let accomplished7 = false;
let accomplished8 = false;
let accomplished9 = false;






function levelAccomplished(){
  if(level === 1 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished1 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }
  if(level === 2 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished2 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }
  if(level === 3 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished3 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }
  if(level === 4 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished4 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }
  if(level === 5 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished5 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }
  if(level === 6 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished6 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }
  if(level === 7 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished7 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }

  if(level === 8){
    let numberOfGray = 0;
    for(let i = 0; i < grid.length; i++){
      for(let j = 1; j < grid[0].length; j++){
        if(grid[i][j].color === 'gray'){
          numberOfGray = 1;
        }
      }
    }
    if( numberOfGray === 0){
      console.log('I am here')
      accomplished8 = true;
      accomplishPage();
      clearInterval(interval0)
      clearInterval(interval1);
      clearInterval(interval2);
      $score.innerText = 0;
    }
    else{numberOfGray = 0}
  }


  if(level === 9 && Number($score.innerText) >= goal){
    console.log('I am here')
    accomplished9 = true;
    accomplishPage();
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    $score.innerText = 0;
  }
}



function accomplishPage(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.save()
  $retryButton.innerText = 'NEXT'
  // Blue Background
  ctx.fillStyle = "blue"
  ctx.fillRect(0,0,width,height)
  ctx.fillStyle = "white"
  ctx.font = "50px Arial"
  ctx.textAlign = "center"
  ctx.fillText("LEVEL COMPLEDED",width/ 2, 100);
  //ctx.font = "30px Arial"

  if(level === 9){
    ctx.fillText("WOOOOOW",width/ 2, 450);
    ctx.fillText("AMAZING!!!!!!",width/ 2, 550);
    ctx.fillText("I OWE YOU A DRINK!",width/ 2, 650);
  }
  else{
    ctx.fillText("CONGRATULATIONS!!",width/ 2, 550);
    ctx.fillText("Try out the next level",width/ 2, 650);
    
  }
  ctx.restore()
}

