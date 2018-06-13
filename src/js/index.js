import aircraft from "./aircraft";
import enemy from "./enemy";
import bullet from "./bullet";
import hit from "./hit";
import img1 from "../images/3.png"
import img2 from "../images/5.png"
import * as util from "./util";
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let ctx = c1.getContext('2d');
let ctx2 = c2.getContext('2d');
let restart = document.getElementById("restart");
let pause = document.getElementById("pause");
let end = document.getElementById("end");
let startbtn = document.getElementById("start");

util.loadImg([img1, img2]).then(re => {
    let isOver = true;
    let ispause = false;
    let [img1, img2] = re;

    let main = new aircraft(ctx, img1);
    let enemyBox = makeEnemy(3, img1);
    let i = 0;  //每一帧都会加一
    let t = 0;  //上一帧的事件
    let z = 0;  //两帧之间的间隔
    let life = 10;  //生命值
    let score=0;
    let addbullet = main.addBullet(img2);

    function init() {
        main = new aircraft(ctx, img1);
        enemyBox = makeEnemy(3, img1);
        i = 0;
        t = 0;
        z = 0
        life = 10;
        addbullet = main.addBullet(img2);
        isOver = false
        ispause=false;
        score=0;
    }


    function callback() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        main.draw();
        let data1 = main.getPoint();
        enemyBox = enemyBox.filter(val => {
            if (val.isOutBounds()) {
                life -= 1;
                if (life <= 0) {
                    over();
                    // isOver = true;
                }
            }
            return !val.isOutBounds() && !val.damage;
        })
        enemyBox.map((val) => {
            val.draw();
            let data2 = val.getPoint();
            //跟主机有没有碰撞
            for (let i = 0; i < data1.length; i++) {
                for (let j = 0; j < data2.length; j++) {
                    if (hit.IsHit(data1[i], data2[j])) {
                        // isOver = true;
                        over();
                        break;
                    }
                }
            }
            for (let i = 0; i < main.bulletBox.length; i++) {
                let el = main.bulletBox[i];
                let tmp = el.getPoint();
                for (let j = 0; j < data2.length; j++) {
                    if (hit.IsHit(tmp[0], data2[j])) {
                        val.damage = true;
                        score++;
                        // val.inBullet(el.attack);
                        el.damage = true;
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
        if (i == 20) {
            enemyBox.push(new enemy(ctx, img1));
            i = 0;
        }
        i++;
        if (!isOver && !ispause) {
            window.requestAnimationFrame(callback);
        }
    }

    function start() {
        init();
        window.requestAnimationFrame(callback);
    }
    function bindEvent() {
        restart.onclick = () => {
            ispause=false;
            if (!isOver) {
                init();
            } else {
                start();
            }

        }
        pause.onclick = () => {
            ispause = true;
        }
        end.onclick = () => {
            init();
            isOver = true;
        }
        startbtn.onclick = () => {
            if (isOver) {
                start();
            }else if (ispause){
                ispause=false;
                window.requestAnimationFrame(callback);
            }
            
        }
    }
    bindEvent();
    let fps = setInterval(() => {
        ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
        if (z && !isOver) {
            ctx2.font = "italic 35px 黑体";
            ctx2.fillStyle = "Red";
            ctx2.fillText("FPS:" + Math.ceil(1000 / z), 20, 40, 200);
        }
        if (!isOver) {
            ctx2.font = "italic 35px 黑体";
            ctx2.fillStyle = "Red";
            ctx2.fillText("生命值:" + life, 600, 40, 200);
        }
        if (!isOver) {
            ctx2.font = "italic 35px 黑体";
            ctx2.fillStyle = "Red";
            ctx2.fillText("分数:" + score, 400, 40, 200);
        }
        if (isOver) {
            ctx2.font = "italic 55px 黑体";
            ctx2.fillStyle = "Red";
            ctx2.fillText("游戏结束", 300, 300, 200);
            return;
        }
        if (ispause) {
            ctx2.font = "italic 55px 黑体";
            ctx2.fillStyle = "Red";
            ctx2.fillText("暂停", 300, 300, 200);
            return;
        }
        
    }, 100);

    function over() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
        // ctx2.font = "italic 55px 黑体";
        // ctx2.fillStyle = "Red";
        // ctx2.fillText("游戏结束", 300, 300, 200);
        // clearInterval(fps);
        // clearInterval(addbullet);
        isOver = true;
    }
}, err => {
    console.log(err);
})

// start();

function makeEnemy(count, img) {
    let ret = [];
    while (count) {
        ret.push(new enemy(ctx, img));
        count--;
    }
    return ret;
}




