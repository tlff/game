const $ = require("jquery");
const path = require("path");
const root = path.resolve("es6", "./src/data")
const url1 = path.resolve(root, "1.txt");
const url2 = path.resolve(root, "2.txt");
const url3 = path.resolve(root, "3.txt");
// 三个请求依次进行
let a =async ()=>{
    return await Promise.all([
        $.ajax({ url: url1, dataType: "json" }),
        $.ajax({ url: url2, dataType: "json" }),
        $.ajax({ url: url3, dataType: "json" })
    ])
}
a().then(results=>{
    let [d1,d2,d3]=results;
    console.log(d1);
    console.log(d2);
    console.log(d3);
},err=>{
    console.log(err);
});
