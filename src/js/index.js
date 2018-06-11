import aircraft from "./aircraft";
import enemy from "./enemy";
import hit from "./hit";
import img1 from "../images/3.png"
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let ctx = c1.getContext('2d');
let ctx2 = c2.getContext('2d');
// (()=>{
//     const a={
//         x:11,
//         y:60,
//         w:11,
//         h:11
//     }
//     const b = {
//         x: 11,
//         y: 11,
//         w: 10,
//         h: 10
//     }
//     console.log(hit.IsHit(a,b));
// })();
getImg(img1).then(img=>{
    
    let main = new aircraft(ctx,img);
    let enemyBox = makeEnemy(3,img);
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
            enemyBox.push(new enemy(ctx, img));
            i=0;   
        }
        i++;
        window.requestAnimationFrame(callback);
    }
    // callback();
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

function getImg(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        if (img.complete) {
            resolve(img);
            return;
        }
        console.log(img.complete);
        img.onload = function () {
            resolve(img);
        }
        img.onerror = function (err) {
            reject(err);
        }
    })
}

