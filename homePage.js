
function drawHomePage() {
  //Turn off the music everytime we get here.
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  //Changes the button to start
  $retryButton.innerText = 'INFO'
  ctx.save()
  // Black Background
  ctx.fillStyle = "#3398db"
  ctx.fillRect(0,0,width,height)
  ctx.restore()

 

   // Level 1 Background pink
  ctx.save()
  if(accomplished1 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.fillRect(100,200,100,100);
  ctx.restore()

  // Level 2 Background pink
  ctx.save()
  if(accomplished2 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.fillRect(300,200,100,100);
  ctx.restore()

  //Level 3 Background pink
  ctx.save()
  if(accomplished3 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.fillRect(500,200,100,100);
  ctx.restore()

  // Level 4 Background pink
  ctx.save()
  if(accomplished4 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.fillRect(100,400,100,100);
  ctx.restore()

   //Level 5 background pink
   ctx.save()
   if(accomplished5 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
   ctx.shadowColor = 'pink';
   ctx.shadowBlur = 30;
   ctx.shadowOffsetX = 10;
   ctx.fillRect(300,400,100,100);
   ctx.restore()

     // Level 6 background pink
  ctx.save()
  if(accomplished6 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.fillRect(500,400,100,100);
  ctx.restore()

  // Level 7 Background pink
  ctx.save()
  if(accomplished7 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.fillRect(100,600,100,100);
  ctx.restore()

   // Level 8 background pink
   ctx.save()
   if(accomplished8 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
   ctx.shadowColor = 'pink';
   ctx.shadowBlur = 30;
   ctx.shadowOffsetX = 10;
   ctx.fillRect(300,600,100,100);
   ctx.restore()

  //Level 9 background pink
  ctx.save()
  if(accomplished9 === true){
    ctx.fillStyle = '#87850e'
  }
  else{
    ctx.fillStyle = '#dd4e4e'
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 10;
  ctx.fillRect(500,600,100,100);
  ctx.restore()








    // Text
    ctx.fillStyle = "white"
    ctx.font = "50px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Level",width/ 2, 100);
    ctx.fillText("1",150, 270);
    ctx.fillText("2",350, 270);
    ctx.fillText("3",550, 270);
    ctx.fillText("4",150, 470);
    ctx.fillText("5",350, 470);
    ctx.fillText("6",550, 470);
    ctx.fillText("7",150, 670);
    ctx.fillText("8",350, 670);
    ctx.fillText("9",550, 670);
    ctx.restore()



// sending the user to the right level.
  document.onclick = click => {
    // canvas.requestFullscreen()
     let rect = canvas.getBoundingClientRect();
     let scaleX = canvas.width / rect.width;
     let sclaeY = canvas.height / rect.height;
     let possitionX = Math.floor(((click.clientX - rect.left) * scaleX) / 100);
     let possitionY = Math.floor(((click.clientY - rect.top) * sclaeY) / 100);
     console.log('posXY', possitionX, possitionY)
     if(possitionX >= 1 && possitionX < 2 &&
      possitionY >= 2 && possitionY < 3){
      document.body.requestFullscreen()
        level = 1;
        Clicking()
        infoPage()
        ;
        return;
      }
      if(possitionX >= 3 && possitionX < 4 &&
        possitionY >= 2 && possitionY < 3){
        document.body.requestFullscreen()
          level = 2;
          Clicking()
          infoPage()
          return;
        }
        if(possitionX >= 5 && possitionX < 6 &&
          possitionY >= 2 && possitionY < 3){
          document.body.requestFullscreen()
            level = 3;
            Clicking()
            infoPage()
            return;
          }
          if(possitionX >= 1 && possitionX < 2 &&
            possitionY >= 4 && possitionY < 5){
            document.body.requestFullscreen()
              level = 4;
              Clicking()
              infoPage()
              return;
            }
            if(possitionX >= 3 && possitionX < 4 &&
              possitionY >= 4 && possitionY < 5){
              document.body.requestFullscreen()
                level = 5;
                Clicking()
                infoPage()
                return;
              }
              if(possitionX >= 5 && possitionX < 6 &&
                possitionY >= 4 && possitionY < 5){
                document.body.requestFullscreen()
                  level = 6;
                  Clicking()
                  infoPage()
                  return;
                }
                if(possitionX >= 1 && possitionX < 2 &&
                  possitionY >= 6 && possitionY < 7){
                  document.body.requestFullscreen()
                    level = 7;
                    Clicking()
                    infoPage()
                    return;
                  }
                  if(possitionX >= 3 && possitionX < 4 &&
                    possitionY >= 6 && possitionY < 7){
                    document.body.requestFullscreen()
                      level = 8;
                      Clicking()
                      infoPage()
                      return;
                    }
                    if(possitionX >= 5 && possitionX < 6 &&
                      possitionY >= 6 && possitionY < 7){
                      document.body.requestFullscreen()
                        level = 9;
                        Clicking()
                        infoPage()
                        return;
                      }

      else{ return}
  }
}

function Clicking (){
  buttonClicking.pause();
  buttonClicking.currentTime = 0
  buttonClicking.play();
}
