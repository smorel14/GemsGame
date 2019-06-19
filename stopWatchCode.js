
var stopWatch = new StopWatch();
var $minDec      = document.getElementById('minDec');
var $minUni      = document.getElementById('minUni');
var $secDec      = document.getElementById('secDec');
var $secUni      = document.getElementById('secUni');


//let minDecStart = $minDec.innerText;
//let minUniStart = $minUni.innerText;
//let secDecStart = $secDec.innerText;
//let secUniStart = $secUni.innerText;



function printTime() {
  printMinutes()
  printSeconds()
}


function printMinutes() {
  let minutes =  stopWatch.getMinutes()
  minutes = stopWatch.twoDigitsNumber(minutes)
          $minDec.innerText = minutes[0];
          $minUni.innerText = minutes[1];

}

function printSeconds() {
  let seconds =  stopWatch.getSeconds()
  seconds = stopWatch.twoDigitsNumber(seconds)
          $secDec.innerText = seconds[0];

          $secUni.innerText = seconds[1];
  
  

}







/*

let timer = 0;
$btnLeft.onclick = function() {
  if($btnLeft.innerText === 'START'){
      stopWatch.startClick()
      timer = setInterval(() => {
          printTime()
          console.log (timer);
      }, 10)
  
      $btnLeft.style.backgroundColor = "red";
      $btnLeft.innerText = "STOP";
      $btnRight.style.backgroundColor = "blue";
      $btnRight.innerText = "SPLIT";
  }
  else{
      $btnLeft.style.backgroundColor = "green";
      $btnLeft.innerText = "START";
      $btnRight.style.backgroundColor = "gray";
      $btnRight.innerText = "RESET";

      clearInterval(timer);
      stopWatch.stopClick();
  }

};

$btnRight.onclick = function(){
  if($btnRight.innerText === 'SPLIT')
  {printSplit()}
  else{
        $milDec.innerText = 0;
        $milUni.innerText = 0;
        $minDec.innerText = 0;
        $minUni.innerText = 0;
        $secDec.innerText = 0;
        $secUni.innerText = 0;

       clearSplits() 
       stopWatch.resetClick();

  }
  
}
*/