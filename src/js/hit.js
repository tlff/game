/**
 * 像素级碰撞检测
 */
export default class hit {
    constructor() {
    }
    /**
     * 根据图像位置抽象出能描述图像的像素
     * @param {object} location 
     * {
     *  x,y,w,h
     * }
     */
    static DescriptionPixel(location, ctx, interval = 4) {

        let x = location.x;
        let y = location.y;
        let width = location.w;
        let height = location.h;
        let ret = [];
        for (let i = y; i <= height + y - interval; i += interval) {
            for (let j = x; j <= width + x - interval; j += interval) {
                let data = ctx.getImageData(j, i, interval, interval).data;
                let num = 0;
                let count = 0;
                for (let k = 0; (k + 3) < data.length; k += 4) {
                    num += data[k + 3];
                    count++;
                }
                let avg = num / count;
                if (avg > 0) {
                    ret.push({
                        x: j,
                        y: i,
                        w: interval,
                        h: interval
                    });
                }
            }
        }
        return ret;
    }
    /**
     * 判断两个矩形是否相交
     * @param {object} source  矩形对象
     * {
     *  x,y,w,h
     * }
     * @param {object} target 
     */
    static IsHit(source, target) {
        //如果两个矩形相交那么两个矩形的中心点之间的距离一定小于等于两个矩形边长和的一半.
        let o1x = source.x + source.w / 2;
        let o1y = source.y + source.h / 2;

        let o2x = target.x + target.w / 2;
        let o2y = target.y + target.h / 2;
        // let dx = Math.sqrt((o1x - o2x) * (o1x - o2x) + (o1y - o2y) * (o1y - o2y));
        let dx = Math.abs(o1x - o2x);
        let dy = Math.abs(o1y - o2y);
        if (dx <= (source.w + target.w) / 2 && dy <= (source.h + target.h) / 2) {
            return true;
        } else {
            return false;
        }
    }
}