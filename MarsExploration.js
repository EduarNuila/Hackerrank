function marsExploration(s) {
    let strToArr = s.split(''); 
        let finalArr = [];
        let changedLetters = 0;
        let a = strToArr.slice(0, 3);
        
        for(let i = 0; i < strToArr.length; i = i + 3){
            finalArr.push(strToArr.slice(i, i+3))
        }
    
        finalArr.forEach(el=> {
          
            if(el[0] !== 'S'){
                changedLetters++
            }
    
            if(el[1] !== 'O'){
                changedLetters++
            }
    
            if(el[2] !== 'S'){
                changedLetters++
            }
    
        });
       
        return changedLetters;
    
    }
    
    function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
        const s = readLine();
    
        const result = marsExploration(s);
    
        ws.write(result + '\n');
    
        ws.end();
    }