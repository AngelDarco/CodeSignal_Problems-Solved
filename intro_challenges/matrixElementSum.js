function solution(matrix){
	let sum = 0;
	let res = 0;
   for (let i = 0; i < matrix.length; i++){
    for(let x = 0; x <= matrix.length; x++){
     		sum += matrix[i][x]
      }
    }
 
   for (let i = 0; i < matrix.length-1; i++){
    for(let x = 0; x <= matrix.length; x++){
     	if(matrix[i][x] === 0) 
      res += matrix[i+1][x]
      console.log(matrix[i][x],res)
      }
    }
return sum-res
 }

solution([
  				// [0,1,1,2], 
  				// [0,5,0,0], 
  				// [2,0,3,3]  //expected output 9
  [1,1,1,0], 
 [0,5,0,1], 
 [2,1,3,10]    //expected output 19
])