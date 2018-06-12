import plain from "./plain";

export default class enemy extends plain {
    constructor(ctx,img) {
        super(ctx,img);
        this.left = this.random(0,this.canvas.width-this.width);
        this.top = -this.height;
        this.speed = 3;
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
            }, {
                x: l + 5,  //左机翼第二块
                y: t + 21,
                w: 4,
                h: 6
            }, {
                x: l + 9,  //左机翼第3块
                y: t + 14,
                w: 4,
                h: 6
            }, {
                x: l + 13,  //左机翼第4块
                y: t + 15,
                w: 5,
                h: 8
            }, {
                x: l + 31,  //右机翼第二块
                y: t + 12,
                w: 4,
                h: 6
            }, {
                x: l + 27,  //右机翼第3块
                y: t + 14,
                w: 4,
                h: 6
            }, {
                x: l + 22,  //右机翼第4块
                y: t + 15,
                w: 5,
                h: 8
            }, {
                x: l + 14,  //左机尾
                y: t + 1,
                w: 4,
                h: 4
            }, {
                x: l + 22,  //右机尾
                y: t + 1,
                w: 4,
                h: 4
            }
        ]
    }

}