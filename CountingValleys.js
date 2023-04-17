function countingValleys(steps, path) {
    let lvlArr = [0]

    path.split('').forEach((el, idx)=> {
        console.log(el);


        if(el === 'U'){
            lvlArr.push(lvlArr[lvlArr.length-1]+1)
        } else {
            lvlArr.push(lvlArr[lvlArr.length-1]-1)
        }

    })
   
    let valleys = 0;

    for(var i = 1; i < lvlArr.length; i++){
       
        if(lvlArr[i-1] === -1 && lvlArr[i] === 0){
            valleys++
        }

    }

    return valleys;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}