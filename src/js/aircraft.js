export default class aircraft {
    constructor(ctx) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.hp = 10;
        this.attack = 1;
        this.img = null;
        this.left = 360;
        this.top = 520;
        this.width = 80;
        this.height = 60;
        this.speed = 10;
        // this.draw();
        this.bindEvent();
    }
    bindEvent() {
        console.log(this.ctx.canvas.__proto__);

        document.onkeyup = ev => {
            let code = ev.keyCode;
            this.status(code, false);
        }
        document.onkeydown = ev => {
            let code = ev.keyCode;
            this.status(code, true);

        }
    }
    status(key, val) {
        switch (key) {
            case 37:
                this.l = val;
                break;
            case 38:
                this.t = val;
                break;
            case 39:
                this.r = val;
                break;
            case 40:
                this.d = val;
                break;
        }
    }
    draw() {
        //295 219
        if (!this.img) {
            this.getImg("/es6/src/images/1.jpg")
                .then(img => {
                    this.img = img;
                    this._draw();
                }, er => {
                    console.log(er);
                })
        } else {
            this._draw();
        }

    }
    _draw(){
        this.l ? this.left -= this.speed : "";
        this.t ? this.top -= this.speed : "";
        this.r ? this.left += this.speed : "";
        this.d ? this.top += this.speed : "";
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.img,
            0, 0, 295, 219,
            this.left, this.top, this.width, this.height
        )

    }
    getImg(src) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function (err) {
                reject(err);
            }
        })
    }

}