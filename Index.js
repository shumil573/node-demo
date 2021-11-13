const say = require('./hello.js');
const fs=require('fs');//系统自带的模块
say.sayHello();

fs.readFile('./package.json',(error,data)=>{
    if(error) throw error;//抛出异常
    console.log(data.toString());
}

)

const file = fs.readFileSync('./package.json');//同步调用，不用回调
console.log('同步',file.toString());
