import plain from "./plain";
export default class aircraft extends plain {
    constructor(ctx, img) {
        super(ctx, img);
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
    getPoint() {
        let l = this.left;
        let t = this.top;
        return [
            {
                x: l + 18,
                y: t,
                w: 4,
                h: 38
            }, {
                x: l + 1,
                y: t + 24,
                w: 4,
                h: 5
            }, {
                x: l + 35,
                y: t + 24,
                w: 4,
                h: 5
            }
        ]
    }

}