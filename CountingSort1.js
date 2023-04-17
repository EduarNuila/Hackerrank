function countingSort(arr) {
    let finalArr = [];
  
  
  for(var i = 0; i <100; i++){
      finalArr.push(0);
  }
  
  
  arr.forEach(el=> {
      finalArr[el] = finalArr[el] + 1
  })
  
  
  return finalArr;
}