
function infoPage() {
  ctx.save()
  // Blue Background
  ctx.fillStyle = "#3398db"
  ctx.fillRect(0,0,width,height)
  ctx.fillStyle = "white"
  ctx.font = "50px Arial"
  ctx.textAlign = "center"
  ctx.fillText("INSTRUCTIONS",width/ 2, 100);

  ctx.font = "30px Arial"
  ctx.fillText("GOOD LUCK!!",width/ 2, 775);


  

  

  if(level === 0){
  //Changes the button to start
  $retryButton.innerText = 'HOME'
  ctx.font = "30px Arial"
  ctx.fillText("HOW TO PLAY",width/ 2, 450);
  ctx.fillText("GOAL",width/ 2, 200);

  
  ctx.fillText("To remove the grey boxes. The number of grey",width/ 2, 250);
  ctx.fillText("boxes and the speed at which it must be done",width/ 2, 290);
  ctx.fillText("at will depend on the level",width/ 2, 330);

  ctx.fillText("You can switch 2 boxes alongside one another if",width/ 2, 500);
  ctx.fillText("it results in 3 or more consecutive boxes of",width/ 2, 540);
  ctx.fillText( "the same color. Having 3 consecutive boxes of",width/ 2, 580);
  ctx.fillText( "the same color will result in the boxes of",width/ 2, 620);
  ctx.fillText( "the same color to be removed.",width/ 2, 660);

  ctx.fillText("GOOD LUCK!!",width/ 2, 775);



  }
  if(level === 1){
    goal = 600;
    ctx.fillText("GOAL",width/ 2, 300);
    $retryButton.innerText = 'START'
    ctx.fillText("Get 600 points by removing all the grey",width/ 2, 350);
    ctx.fillText("boxes. This level should be easy for a",width/ 2, 390);
    ctx.fillText("nerd like you.",width/ 2, 430);

  }
  if(level === 2){
    goal = 2000;
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 2000 points! You'll get 100 points",width/ 2, 350);
    ctx.fillText("for every grey box you remove.",width/ 2, 390);
  }
  if(level === 3){
    goal = 1300;
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 1300 points. Be careful, there won't",width/ 2, 350);
    ctx.fillText("be any new squares coming in this time.",width/ 2, 390);
  }
  if(level === 4){
    goal = 300;
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 300 points by removeing 3 grey squares!",width/ 2, 350);
    ctx.fillText("There are only 4 grey squares available.",width/ 2, 390);
  }
  if(level === 5){
    goal = 3000;
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Remove enough grey squares to get 3000",width/ 2, 350);
    ctx.fillText("points. You only have 3 minutes",width/ 2, 390);
  }
  if(level === 6){
    goal = 3000;
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Remove enough grey squares to get 3000",width/ 2, 350);
    ctx.fillText("points. You only have 2 minutes",width/ 2, 390);
    ctx.fillText("Show off your geaky skills!",width/ 2, 430);
  }
  if(level === 7){
    goal = 300;
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 300 points by removeing 3 grey squares!",width/ 2, 350);
    ctx.fillText("There are only 3 grey squares available.",width/ 2, 390);
  }
  if(level === 8){
    goal = 'n/a'
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Remove all the grey squares! You'll",width/ 2, 350);
    ctx.fillText("only win when there are no more grey",width/ 2, 390);
    ctx.fillText("boxes other than on the top line.",width/ 2, 430);
    ctx.fillText("Try not to go crazy!",width/ 2, 470);
  }
  if(level === 9){
    goal = 500;
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 500 points by removeing 5 grey squares!",width/ 2, 350);
    ctx.fillText("There are only 5 grey squares available.",width/ 2, 390);
    ctx.fillText("If you're successful, I owe you a pint!",width/ 2, 430);
  }



  // types the goal onto the button at the bottom.
  $target.innerText = goal;
  ctx.restore()

}
 