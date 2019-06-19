class StopWatch {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick() {
    this.intervalId = setInterval(() => {this.currentTime += 1
    //console.log('cow')
  }, 1000 )
  }


  getMinutes() { 
    return Math.floor((this.currentTime ) / 60);
   }

  
   getSeconds() {
    return (this.currentTime ) % 60;
   }


  twoDigitsNumber(number) {
  
    if(number < 10){
      return '0' + number;
  }
  else{return number.toString()}
}

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
this.currentTime = 0;
  }

  // splitClick() {}
}