import aircraft from "./aircraft";
let c1=document.getElementById('c1');
let ctx=c1.getContext('2d');
let main=new aircraft(ctx);

setInterval(()=>{
    main.draw();
},16)

