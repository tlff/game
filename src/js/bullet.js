import plain from "./plain";

export default class bullet extends plain{
    constructor(ctx,img){
        super(ctx,img);
        this.speed=2;
    }
    _draw(){
        this.top += this.speed;
        this.ctx.save();
        this.ctx.translate(this.left + this.width / 2, this.top + this.height / 2);
        this.ctx.rotate(Math.PI);
        this.ctx.drawImage(this.img,
            0, 0, this.img.width, this.img.height,
            -this.width / 2, -this.height / 2, this.width, this.height
        )
        this.ctx.restore();   
    }
    
}