function sortedSquares(nums){
    const squareNums = [];
    for(num of nums){
        squareNums.push(num*num);
}

squareNums.sort((a,b)=> a-b);
return squareNums;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));