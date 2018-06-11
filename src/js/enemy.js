import plain from "./plain";

export default class enemy extends plain {
    constructor(ctx,img) {
        super(ctx,img);
        this.left = this.random(0,this.canvas.width-this.width);
        this.top = -this.height;
        this.speed = 1;
    }
    random(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    _draw() {
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

    getPoint() {
        let l = this.left;
        let t = this.top;
        return [
            {
                x: l + 18,
                y: t+2,
                w: 4,
                h: 38
            }, {
                x: l + 1,
                y: t + 11,
                w: 4,
                h: 5
            }, {
                x: l + 35,
                y: t + 11,
                w: 4,
                h: 5
            }
        ]
    }

}