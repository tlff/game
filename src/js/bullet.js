import plain from "./plain";
export default class bullet extends plain{
    constructor(ctx,img){
        super(ctx,img);
        this.speed=2;
        this.width=4;
        this.height=4;
        // this.left=400;
        // this.top=600;
    }
    _draw(){
        this.top -= this.speed;
        if(this.top<-this.height){
            this.damage=true;
            return;
        }
        this.ctx.drawImage(this.img,
            0, 0, this.img.width, this.img.height,
            this.left, this.top, this.width, this.height
        )
    }
    getPoint() {
        let l = this.left;
        let t = this.top;
        return [
            {
                x: l,
                y: t,
                w: this.width,
                h: this.height
            }
        ]
    }
    
}