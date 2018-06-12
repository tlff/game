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
        this.damage = false; //是否损坏了
        this.shotInterval = 1000;//射击间隔 毫秒
    }
    getLocation() {
        return {
            x: this.left,
            y: this.top,
            w: this.width,
            h: this.height
        }
    }
    isOutBounds() {
        if (this.left < -this.width || this.left > this.canvas.width || this.top < -this.height || this.top > this.canvas.height) {
            return true;
        } else {
            return false;
        }

    }
    /**
     * 设置位置
     * @param {object} location 
     * {
     * left:"",
     * top:""
     * }
     */
    setLocation(location) {
        this.left = location.left;
        this.top = location.top;
        return this;
    }
    inBullet(attack) {
        this.hp -= attack;
        if (this.hp <= 0) {
            this.damage = true;
        } else {
            this.damage = false;
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
        if (!this.damage) {
            return;
        }
        this.ctx.drawImage(this.img,
            0, 0, this.img.width, this.img.height,
            this.left, this.top, this.width, this.height
        )
    }


}