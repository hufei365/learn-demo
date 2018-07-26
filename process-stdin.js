process.stdin.setEncoding('utf8');
process.stdout.write('input a num, and use \'q\' to quiz: ');
process.stdin.on('readable', () => {
    var chunk = process.stdin.read();

    if (chunk !== null) {
        if(/q/.test(chunk)){
            process.stdout.write('bye bye \n');
            process.stdin.emit('end\n');
            process.exit(1);
        } else  {
            process.stdout.write(`${chunk}x${chunk}=${chunk * chunk}\n`);
        }
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end\n');
});
