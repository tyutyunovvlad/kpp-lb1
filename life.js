const readlineSync = require('readline-sync');

const n = readlineSync.question('input n: '),
    m = readlineSync.question('input m: ');



let pattern = new Array(n);
for (let i = 0; i < n; i++) {
    pattern[i] = new Array(m);
}
let neighboursPattern = new Array(n);
for (let i = 0; i < n; i++) {
    neighboursPattern[i] = new Array(m);
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (Math.round(Math.random()) == 1) {
            // process.stdout.write('1 ');
            pattern[i][j] = '1';
        } else {
            // process.stdout.write('0 ');
            pattern[i][j] = '0';
        }
    }
}

if (n == 13 || m == 15) {
    pattern = [
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '1', '1', '0', '0', '0', '1', '1', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '1', '1', '0', '1', '1', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '1', '1', '0', '1', '1', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    ]
}




setInterval(() => {
    console.clear();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let neighbours = 0;
            if (pattern[i - 1]) {
                if (+pattern[i - 1][j]) {
                    neighbours++;
                }
                if (+pattern[i - 1][j - 1]) {
                    neighbours++;
                }
                if (+pattern[i - 1][j + 1]) {
                    neighbours++;
                }
            }
            if (pattern[i + 1]) {
                if (+pattern[i + 1][j]) {
                    neighbours++;
                }
                if (+pattern[i + 1][j + 1]) {
                    neighbours++;
                }
                if (+pattern[i + 1][j - 1]) {
                    neighbours++;
                }
            }
            if (+pattern[i][j - 1]) {
                neighbours++;
            }
            if (+pattern[i][j + 1]) {
                neighbours++;
            }

            neighboursPattern[i][j] = neighbours;
        }
    }



    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (+neighboursPattern[i][j] == 3) {
                pattern[i][j] = '1';
            } else if (+neighboursPattern[i][j] == 1 || +neighboursPattern[i][j] == 0) {
                pattern[i][j] = '0';
            } else if (+neighboursPattern[i][j] > 3) {
                pattern[i][j] = '0';
            } else if (+pattern[i][j] == '1' && +neighboursPattern[i][j] == 2) {
                pattern[i][j] = '1';
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (+pattern[i][j]) {
                process.stdout.write(`@ `);
            } else {
                process.stdout.write(`- `);
            }

        }
        console.log('');
    }

}, 100);