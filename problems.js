// 1)You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

//solution:
function arrayChange(arr) {
  let moves = 0
  let tracker = arr[0];
  for(let i = 1; i<arr.length;i++){
      if (arr[i] <= tracker){
          moves += tracker+1-arr[i];
          tracker++
      } else {
          tracker = arr[i]
      }  
  }
  return moves
}
//============================================
// 2) An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.
// Example
// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;
// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.
// 316 is not in range [0, 255].
//solution:
function isIPv4Address(str) {
    let arr = str.split('.')
    if(arr.length !== 4) return false
    return arr.every(x=> x && (+x > 10 && +x <=255) || (x.length === 1 && +x > 0) || x === '0')
}
//============================================

// 3) In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

//solution:
function minesweeper(matrix) {
    let mineFeild = []
    for(let i = 0; i<matrix.length; i++){
        let arr = []
        for(let j = 0; j<matrix[0].length; j++){
            let count = 0; 
            if(i>0){
                if(matrix[i-1][j]) count++
                if(matrix[i-1][j+1]) count++
            }
            if(j>0){
                if(matrix[i][j-1]) count++
            }
            if(i>0 && j>0){
                if(matrix[i-1][j-1]) count++
            }
            if(i<matrix.length-1){ 
                if(matrix[i+1][j]) count++
                if(matrix[i+1][j+1]) count++
            } 
            if(i<matrix.length-1 && j>0){ 
                if(matrix[i+1][j-1]) count++
            }   
            if(matrix[i][j+1]) count++
            arr.push(count)
        }
        mineFeild.push(arr)
    }
    return mineFeild
}
//============================================

// 4)Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.


//solution:
function chessBoardCellColor(cell1, cell2) {
    
    function determineColor(letter,num){
        if(letter%2 !== 0 && num%2 !== 0 || letter%2 === 0 && num%2 === 0){
            return 'dark'
        } else {
            return 'light'
        }
    }
    let firstCell = determineColor(cell1.charCodeAt(0),(+cell1[1]))
    let secondCell = determineColor(cell2.charCodeAt(0),(+cell2[1]))
    
    return firstCell === secondCell
}
//5)