
    //$minDec.innerText = '0';
   // $minUni.innerText = '0';
   // $secDec.innerText = '0';
   // secUni.innerText  = '0';


function failed(){
  console.log('failed', $minDec.innerText, level)
  if( level === 5 && Number($minUni.innerText) >= 3){

    stopWatch.stopClick();
    stopWatch.resetClick()
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    failedPage()
  }
  if( level === 6 && Number($minUni.innerText) >= 2){
    stopWatch.stopClick();
    stopWatch.resetClick()
    clearInterval(interval0)
    clearInterval(interval1);
    clearInterval(interval2);
    failedPage()
  }
}





function failedPage(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.save()
  $retryButton.innerText = 'NEXT'
  // Blue Background
  ctx.fillStyle = "blue"
  ctx.fillRect(0,0,width,height)
  ctx.fillStyle = "white"
  ctx.font = "50px Arial"
  ctx.textAlign = "center"
  ctx.fillText("LEVEL FAILED",width/ 2, 100);
  //ctx.font = "30px Arial"

    ctx.fillText("Unlucky!!!",width/ 2, 450);
    ctx.fillText("Better Luck next time",width/ 2, 550);
  ctx.restore()
}