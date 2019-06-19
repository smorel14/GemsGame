class Square {
    constructor(x, y){
      this.color = colorAray[Math.floor(Math.random()*colorAray.length)]
    // this.color = 'orange'
      //possition of the square, with a size of 100 by 100
        this.x = x;
        this.y = y;
        this.isSelected = false
    }
    fillColor(){
        ctx.save()
        ctx.fillStyle = this.color;
        ctx.save()
        ctx.shadowColor = '#898';
         ctx.shadowBlur = 25;
         ctx.shadowOffsetX = -20;
        // ctx.shadowOffsetY = -20;
        ctx.fillRect(this.x*100,this.y*100,100,100);
        ctx.restore();

        /*
        ctx.save
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white"
        ctx.strokeRect(this.x*100 + 10,this.y*100 + 10, 80, 80);
        ctx.restore();
        */

    
        if (this.isSelected) {
            ctx.strokeStyle = "white"
            ctx.strokeRect(this.x*100+10,this.y*100+10,100-2*10,100-2*10);
            ctx.lineWidth =2
            ctx.strokeStyle = "black"
            ctx.strokeRect(this.x*100+12,this.y*100+12,100-2*12,100-2*12);
            
        }
        
        ctx.restore();
    }
    fill3DShape(){

        

    }
}