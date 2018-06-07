const $ = require("jquery");
const path = require("path");
const root = path.resolve("es6", "./src/data")
const url1 = path.resolve(root, "1.txt");
const url2 = path.resolve(root, "2.txt");
const url3 = path.resolve(root, "3.txt");
import { runner } from "./a";
let a = async () => {
    let data1 = await $.ajax({ url: url1, dataType: "json" });
    console.log(data1);
    let data2 = await $.ajax({ url: url2, dataType: "json" });
    console.log(data2);
    return await $.ajax({ url: url3, dataType: "json" });
}
a().then(r => console.log(r), e => console.log(e))

runner(function* gen() {
    let data1 = yield $.ajax({ url: url1, dataType: "json" });
    let data2 = yield $.ajax({ url: url2, dataType: "json" });
    let data3 = yield $.ajax({ url: url3, dataType: "json" });
    console.log(data1, data2, data3);
    return 1;
})