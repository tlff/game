import plain from "./plain";
import bullet from "./bullet";
export default class aircraft extends plain {
    constructor(ctx, img) {
        super(ctx, img);
        this.bulletBox = [];
        this.shotInterval = 200;//射击间隔 毫秒
        this.bindEvent();
    }
    bindEvent() {
        document.onkeyup = ev => {
            let code = ev.keyCode;
            this.status(code, false);
        }
        document.onkeydown = ev => {
            let code = ev.keyCode;
            this.status(code, true);
        }
    }
    _draw() {
        if (this.l) {
            if (this.left > 0) {
                this.left -= this.speed;
            } else {
                this.left = 0;
            }
        }
        if (this.t) {
            if (this.top > 0) {
                this.top -= this.speed;
            } else {
                this.top = 0;
            }
        }
        if (this.r) {
            if (this.left < this.canvas.width - this.width) {
                this.left += this.speed;
            } else {
                this.left = this.canvas.width - this.width;
            }
        }
        if (this.d) {
            if (this.top < this.canvas.height - this.height) {
                this.top += this.speed;
            } else {
                this.top = this.canvas.height - this.height;
            }
        }
        this.ctx.drawImage(this.img,
            0, 0, this.img.width, this.img.height,
            this.left, this.top, this.width, this.height
        )
        this.bulletBox=this.bulletBox.filter((val)=>{
            return !val.isOutBounds()&&!val.damage;
        });
        this.bulletBox.map(val=>{
            val.draw();
        })
    }
    addBullet(img) {
        return setInterval(() => {
            let left = {
                left: this.left + 3,
                top: this.top + 20
            }
            let right = {
                left: this.left+32,
                top: this.top+20
            }
            let bullet1 = new bullet(this.ctx, img);
            let bullet2 = new bullet(this.ctx, img);
            bullet1.setLocation(left);
            bullet2.setLocation(right);
            this.bulletBox.push(bullet1);
            this.bulletBox.push(bullet2);
        }, this.shotInterval);

    }
    getPoint() {
        let l = this.left;
        let t = this.top;
        return [
            {
                x: l + 18,  //主体
                y: t,
                w: 4,
                h: 38
            }, {
                x: l + 1,   //左机翼
                y: t + 24,
                w: 4,
                h: 5
            }, {
                x: l + 35,  //右机翼
                y: t + 24,
                w: 4,
                h: 5
            }, {
                x: l + 5,  //左机翼第二块
                y: t + 22,
                w: 4,
                h: 6
            }, {
                x: l + 9,  //左机翼第3块
                y: t + 20,
                w: 4,
                h: 6
            }, {
                x: l + 13,  //左机翼第4块
                y: t + 17,
                w: 5,
                h: 8
            }, {
                x: l + 31,  //右机翼第二块
                y: t + 22,
                w: 4,
                h: 6
            }, {
                x: l + 27,  //右机翼第3块
                y: t + 20,
                w: 4,
                h: 6
            }, {
                x: l + 22,  //右机翼第4块
                y: t + 17,
                w: 5,
                h: 8
            }, {
                x: l + 22,  //右机尾
                y: t + 35,
                w: 4,
                h: 4
            }, {
                x: l + 14,  //左机尾
                y: t + 35,
                w: 4,
                h: 4
            }
        ]
    }

}