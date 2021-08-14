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
//5)One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

// When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.

// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

// Example

// For n = 240, the output should be
// lateRide(n) = 4.

// Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.




//solution:
function lateRide(n) {
    function timeToDigit(num){
        return num.toString().split('').reduce((acc,item)=>acc+(+item),0)
    }
    let hr = Math.floor(n/60)
    let min = (n%60)
    return timeToDigit(hr) + timeToDigit(min)
}
//============================================
// 6)You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

//solution:
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let totalV = 0;
    if(value1 > value2){
        if(maxW >= weight1){
            totalV += value1;
            if(maxW - weight1 >= weight2) totalV += value2;
        }else if(maxW >= weight2){
            totalV += value2;
        }
    } else {
        if(maxW >= weight2){
            totalV += value2;
            if(maxW - weight2 >= weight1) totalV += value1;
        }else if(maxW >= weight1){
            totalV += value1;
        }
    }
    return totalV;
}
