console.log('argv : ', process.argv.slice(2));

// if(process.argv[2]){
//     console.log('-----------存在第三个参数-------------')
// }

// console.log('execArgv :', process.execArgv); // 执行Node程序，传递给Node的参数

// // console.log('env :', process.env); // 程序运行的当前环境信息

// console.log('arch :', process.arch); // 返回程序运行架构

// // set process.env
// process.env.a = 1;
// console.log('env.a' , process.env.a);


// console.log('cwd : ' , process.cwd());
// process.chdir('/home/zhangliyuan');
// console.log('cwd : ' , process.cwd());

// console.log('pid : ' , process.pid); // 进程id
// console.log('version : ' , process.version); // node 版本
// console.log('platform : ' , process.platform); // 程序运行平台
// console.log('execPath : ' , process.execPath); // 可执行文件的绝对路径


// console.log('memoryUsage : ' , process.memoryUsage()); // 程序资源占用

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`data: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end\n');
});

// in 3 seconds, end input
// setTimeout(()=>{
//     process.stdin.emit('end');
// }, 3000);



// event  进出退出前的事件
process.on('beforeExit', function () {
    console.log('before program exit');
});


// 进程退出时，触发的事件
process.on('exit', function () {
    console.log('the program exited');
});

// process.abort(); // 终止进程

function command(cmd){
    switch(cmd){
        case 'date':
            process.stdout.write('current date is ' + new Date());
    }
}