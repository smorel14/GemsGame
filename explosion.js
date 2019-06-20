

    function explosion(x, y){
      for(let i = 0; i < 3; i++){
        setTimeout(() => {
          ctx.save()
        //ctx.fillStyle = colorAray[Math.floor(Math.random()*5)]
        ctx.lineWidth = 20;
        ctx.strokeStyle = colorAray[Math.floor(Math.random()*5)];
        ctx.beginPath();
        ctx.arc((x*100) + 50, (y*100) + 50, (i*20)+50, 0, 2 * Math.PI);
        //ctx.fill();
        ctx.stroke();
        ctx.restore()
        },i*200)
      }
    }
    