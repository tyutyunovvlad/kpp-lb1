let n = 10,
    m = 10;

let map = new Array(n);
for (let i = 0; i < n; i++) {
    map[i] = new Array(m);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        map[i][j] = '0';
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        process.stdout.write(`${map[i][j]} `);
    }
    console.log("");
}

setInterval(() => {
    console.clear();
    map[randomInt(0,n)][randomInt(0,m)] = '@';



    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            process.stdout.write(`${map[i][j]} `);
        }
        console.log("");
    }
    
}, 2000);


function randomInt(min, max) {
    max--;
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }