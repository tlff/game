
export default class plain {
    constructor(ctx, img) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.hp = 10;
        this.attack = 1;
        this.img = img;
        this.width = 40;
        this.height = 40;
        this.left = this.canvas.width / 2 - this.width / 2;
        this.top = this.canvas.height - this.height - 20;
        this.speed = 10;
    }
    getLocation() {
        return {
            x: this.left,
            y: this.top,
            w: this.width,
            h: this.height
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
        return this._draw();
    }
    _draw() {
        this.l ? this.left -= this.speed : "";
        this.t ? this.top -= this.speed : "";
        this.r ? this.left += this.speed : "";
        this.d ? this.top += this.speed : "";

        this.ctx.drawImage(this.img,
            0, 0, this.img.width, this.img.height,
            this.left, this.top, this.width, this.height
        )
    }


}