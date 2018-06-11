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