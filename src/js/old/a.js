export function runner(gen){
    return new Promise((resolve,reject)=>{
        let ge=gen();
        next();
        function next(lastRes) {
            let res = ge.next(lastRes);
            let obj = res.value;
            if(!res.done){
                if(obj.then){
                    obj.then(re=>{
                        next(re);
                    },er=>{
                        reject(er);
                    })
                }else if(typeof obj =="function"){
                    if (obj.constructor.toString().startWith("function GeneratorFunction()")){
                        runner(obj).then(res=>next(res),er=>reject(er))
                    }else{
                        next(obj());
                    }
                }else{
                    next(res);
                }
            }else{
                resolve(obj);
            }
        }
    })
}