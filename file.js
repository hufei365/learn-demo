const fs = require('fs');

// 文件操作都有异步和同步两种模式

// 判断文件是否存在
// fs.exists(path, callback)
fs.exists('node.fs', (exists) => {
    console.log(exists ? 'it\'s there' : 'no exist');
});

// 创建文件
// fs.write(path, callback)
fs.writeFile('node.fs', '2345历史', (err) => {
    if (!err) {
        console.log(`write file: node.fs success`);
    }

    // 监视文件状态
    watchFile('node.fs');
});

// 读取文件
fs.readFile('node.fs', (err, data) => {
    if (!err) {
        console.log(data.toString());
    }
});

// 追加文件
fs.readFile('node.fs', (err, data) => {
    if (!err) {
        fs.appendFile('new_node.fs', data, (err) => {
            console.log('append File  success');

            // 删除文件
            fs.unlink('node.fs', (result) => {
                console.log(result ? 'remove file success' : 'remove file failed~')
            })

            // 重命名文件
            fs.rename('new_node.fs', 'newfile.fs', (err) => {
                console.log('rename file ' + (!err ? 'success' : 'failed'));

                // 获取文件信息
                fs.stat('newfile.fs', (err, stats) => {
                    if (!err) {
                        console.log('isDirectory：', stats.isDirectory());
                        console.log('isFile: ', stats.isFile());
                    }
                })
            });

        })
    }
});

function watchFile(file) {
    fs.watchFile(file, logFileChange);

    function logFileChange(e, fname) {
        console.log(file + ' changed start -----');
        console.log(e);
        console.log(fname);
        console.log(file + ' changed end ------');

        fs.unwatchFile(file, logFileChange);
    }
}




// 目录的一些操作
fs.exists('/home', (result) => {
    console.log('directory ' + (result ? 'exists' : 'no exists'));
});

// 创建目录
fs.mkdir(__dirname + '/mkdir', (result) => {
    console.log(result);
})