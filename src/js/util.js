export function getImg(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        if (img.complete) {
            resolve(img);
            return;
        }
        img.onload = function () {
            resolve(img);
        }
        img.onerror = function (err) {
            reject(err);
        }
    })
}
export async function loadImg(arr) {
    let ret=[];
    for (let i = 0; i < arr.length; i++) {
        let data=await getImg(arr[i]);
        ret.push(data);
    }
    return ret;
}