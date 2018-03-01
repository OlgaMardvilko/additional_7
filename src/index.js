module.exports = function solveSudoku(matrix) {
  
  let searchSolution = function() {
	let hIndex = 0;
	let vIndex = 0;
	let searchNumber = false;
	  
	for (let i=0; i<9 && !searchNumber; i++) {
		for (let j =0; j<9 && !searchNumber; j++) {
		  if (matrix[i][j] == 0) {
		    searchNumber = true;
			  hIndex = i;
			  vIndex = j;
		  }
		}
	}
   
  if (!searchNumber) {return true}
	  	  
	for (let num = 1; num<10; num++){
	  if (fixNumber(hIndex, vIndex, num)) {
		  matrix[hIndex][vIndex]=num;
		  if (searchSolution()) {
        return true
      }
		  matrix[hIndex][vIndex]=0;
		}
	}
	return false
}
  
let fixNumber = function(h, v, num) {

	for (let i=0; i<9; i++) {
	  if(matrix[i][v]===num ) {
      return false;
    }		
  }
  
	for (let j=0; j<9; j++) {
		if(matrix[h][j]===num) {
		  return false;
	  }
	}
	
  let hBox = h - h%3;
  let vBox = v - v%3;

	for (let i=0; i<3; i++){
		for (let j = 0; j<3; j++) {
		  if(matrix[hBox+i][vBox+j]==num) {
			  return false;
			}
		}
  }
  
	return true;
}
	  
  if (searchSolution()) {
    return matrix;
  }  

}
