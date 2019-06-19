
function infoPage() {
  ctx.save()
  // Blue Background
  ctx.fillStyle = "blue"
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

  
  ctx.fillText("To remove the gray boxes. The number of gray",width/ 2, 250);
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
    ctx.fillText("GOAL",width/ 2, 300);
    $retryButton.innerText = 'START'
    ctx.fillText("Get 600 points by removing all the gray",width/ 2, 350);
    ctx.fillText("boxes. This level should be easy for a",width/ 2, 390);
    ctx.fillText("nerd like you.",width/ 2, 430);

  }
  if(level === 2){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 2000 points! You'll get 100 points",width/ 2, 350);
    ctx.fillText("for every gray box you remove.",width/ 2, 390);
  }
  if(level === 3){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 1300 points. Be careful, there won't",width/ 2, 350);
    ctx.fillText("be any new squares coming in this time.",width/ 2, 390);
  }
  if(level === 4){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 300 points by removeing 3 gray squares!",width/ 2, 350);
    ctx.fillText("There are only 4 gray squares avalible.",width/ 2, 390);
  }
  if(level === 5){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Remove enough gray squares to get 3000",width/ 2, 350);
    ctx.fillText("points. You only have 3 minutes",width/ 2, 390);
  }
  if(level === 6){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Remove enough gray squares to get 3000",width/ 2, 350);
    ctx.fillText("points. You only have 2 minutes",width/ 2, 390);
    ctx.fillText("Show off your geaky skills!",width/ 2, 430);
  }
  if(level === 7){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 300 points by removeing 3 gray squares!",width/ 2, 350);
    ctx.fillText("There are only 3 gray squares avalible.",width/ 2, 390);
  }
  if(level === 8){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Remove all the gray squares! You'll",width/ 2, 350);
    ctx.fillText("only win when there are no more gray",width/ 2, 390);
    ctx.fillText("boxex other than on the top line.",width/ 2, 430);
    ctx.fillText("Try not to go crazy!",width/ 2, 470);
  }
  if(level === 9){
    $retryButton.innerText = 'START'
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("GOAL",width/ 2, 300);
    ctx.fillText("Get 500 points by removeing 5 gray squares!",width/ 2, 350);
    ctx.fillText("There are only 5 gray squares avalible.",width/ 2, 390);
    ctx.fillText("I you're successful, I owe you a pint!",width/ 2, 430);
  }





  ctx.restore()

}
 