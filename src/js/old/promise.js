const $ = require("jquery");
const path = require("path");
const root = path.resolve("es6", "./src/data")
const url1 = path.resolve(root, "1.txt");
const url2 = path.resolve(root, "2.txt");
const url3 = path.resolve(root, "3.txt");
import { runner } from "./runner";
Promise.all([
    $.ajax({ url: url1, dataType: "json" }),
    $.ajax({ url: url2, dataType: "json" }),
    $.ajax({ url: url3, dataType: "json" })
]).then(result => {
    console.log(result);
}, error => {
    console.log(error);
})

