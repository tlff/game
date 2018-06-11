import aircraft from "./aircraft";
import enemy from "./enemy";
import hit from "./hit";
import img1 from "../images/3.png"
import img2 from "../images/4.png"
import * as util  from "./util";
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let ctx = c1.getContext('2d');
let ctx2 = c2.getContext('2d');

util.loadImg([img1, img2]).then(re=>{
    let [img1, img2] = re;
    let main = new aircraft(ctx,img1);
    let enemyBox = makeEnemy(3,img1);
    let i = 0;
    let t = 0;
    let z = 0;
    let callback = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        main.draw();

        let data1 = main.getPoint();
        enemyBox.map(val => {
            val.draw();
            let data2 = val.getPoint();
            for(let i=0;i<data1.length;i++){
                for(let j=0;j<data2.length;j++){
                    if(hit.IsHit(data1[i],data2[j])){
                        console.log("碰撞");
                        break;
                    }
                }
            }
        })
        let ti = new Date().getTime();
        if (t) {
            z = (ti - t);
        }
        t = ti;
        if(i==60){
            enemyBox.push(new enemy(ctx, img1));
            i=0;   
        }
        i++;
        window.requestAnimationFrame(callback);
    }
    window.requestAnimationFrame(callback);
    setInterval(() => {
        if (z) {
            ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
            ctx2.font = "italic 35px 黑体";
            ctx2.fillStyle = "Red";
            ctx2.fillText("FPS:" + Math.ceil(1000 / z), 20, 40, 200);
        }
    }, 1000);
},err=>{
    console.log(err);
})


function makeEnemy(count,img){
    let ret=[];
    while(count){
        ret.push(new enemy(ctx,img));
        count--;
    }
    return ret;
}




