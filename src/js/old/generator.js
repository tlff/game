const $ = require("jquery");
const path = require("path");
const root = path.resolve("es6", "./src/data")
const url1 = path.resolve(root, "1.txt");
const url2 = path.resolve(root, "2.txt");
const url3 = path.resolve(root, "3.txt");
import { runner } from "./runner";
//
runner(function* getData() {
    let data1 = yield $.ajax({ url: url1, dataType: "json" });
    let data2 = yield $.ajax({ url: url2, dataType: "json" });
    let data3 = yield $.ajax({ url: url3, dataType: "json" });

    console.log(data1,data2,data3);
    return 2;
})



function* getData() {
    let data1 = yield $.ajax({ url: url1, dataType: "json" });
    let data2 = yield $.ajax({ url: url2, dataType: "json" });
    let data3 = yield $.ajax({ url: url3, dataType: "json" });

    console.log(data1, data2, data3);
    return 2;
}
let f = getData();
f.next().value.then(re => {
    console.log(re);
}, er => {
    console.log(er);
})

