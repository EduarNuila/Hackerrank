function diagonalDifference(arr) {
    var n = arr[0]. length;
    var leftSum = 0;
    var rightSum = 0;
    
    for (var i = 0, j = n - 1; i < n; i++ , j -- ) {
        leftSum += arr[i][i];
        rightSum += arr[i][j];
        
    }
    
    var difference = leftSum - rightSum
    
    return Math.abs(difference);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}