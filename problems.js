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
//============================================
// 7)You just bought a public transit card that allows you to ride the Metro for a certain number of days.

// Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. The 13th time you extend the pass, you get 31 days again.

// You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.

//solution:
function metroCard(lastNumberOfDays) {
    let days = [31,28,31,30,31,30,31,31,30,31,30,31]
    let options = days.filter((x,i,arr)=> arr[i-1]===lastNumberOfDays )
    return [...(new Set(options))]
}
//============================================
// 8)To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A', the students should turn around.

// Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

//solution:
function lineUp(commands) {
    let count = 0
    let same = 0
    let h = commands.split('')
    for(let i =0; i<h.length;i++){
        if(h[i] === 'L' || h[i] === 'R') count++
        if(count%2 === 0) same++
    }
    return same
}
//============================================
// 9)A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

// Given two integers, your task is to find the result that the child will get.

//solution:
function additionWithoutCarrying(param1, param2) {
    let num1 = param1.toString().split('').reverse();
    let num2 = param2.toString().split('').reverse();
    let i = 0;
    let arr = [];
    while(i < num1.length || i<num2.length){
        if(num1[i] && num2[i]){
            let sum = +num1[i] + +num2[i]
            if(sum >= 10) sum = sum - 10
            arr.push(sum)
        } else if(num1[i]){
            arr.push(+num1[i])
        } else if(num2[i]){
            arr.push(+num2[i])
        }
        i++
    }
    return +arr.reverse().join('')
}
//============================================
// 10)You have k apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:

// The smallest box is size 1, the next one is size 2,..., all the way up to size k.
// Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
// Your task is to calculate the difference between the number of red apples and the number of yellow apples.

//solution:
function appleBoxes(k) {
    let y = 0;
    let r = 0;
    let i=1;
    while(i<=k){
        if(i%2 ===0){
            r += i*i
        } else {
            y += i*i
        }
        i++
    }
    return r-y
}
//============================================
// 11)We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

//solution:
function rounders(n) {
    let arr = n.toString().split('').reverse().map(x=> +x);
    let i = 0;
    while(i<arr.length-1){
        if(arr[i] !== 0){
            if(arr[i]>=5) arr[i+1]++
             arr[i]=0;
        }
        i++
    }
    return +arr.reverse().join("")
}
//============================================
// 12)When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

// You have candlesNumber candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers?

//solution:
function candles(candlesNumber, makeNew) {
    let count = candlesNumber;
    let leftover = candlesNumber;
    while(leftover >= makeNew) {
        leftover -= makeNew;
        count++
        leftover++
    }
    return count
}
//============================================

// 13)Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

//solution:
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(x=> x === elemToReplace ? substitutionElem : x)
}
//============================================

// 14)We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.

//solution:
function isSmooth(arr) {
    let middle
    if(arr.length%2 !== 0){
        middle = arr[Math.floor(arr.length/2)]
    } else {
        middle = arr[arr.length/2] + arr[(arr.length/2)-1]
    }
    console.log(middle)
    return arr[0] === arr[arr.length-1] && arr[0] === middle
}

//============================================

// 15)We define the middle of the array arr as follows:
// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

//solution:
function replaceMiddle(arr) {
    if(arr.length%2 !== 0) return arr
    let middle = arr[arr.length/2] + arr[arr.length/2 - 1]
    arr[arr.length/2] = middle
    arr.splice(arr.length/2 -1,1)
    return arr
}
//============================================

// 16)Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

//solution:
function makeArrayConsecutive2(statues) {
    let arr = statues.sort((a,b)=>a-b)
    let tracker = 0
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > arr[i-1]+1){
            tracker += arr[i]-arr[i-1]-1
        }
    }
    return tracker
}

//============================================

// 17)Determine if the given number is a power of some non-negative integer.

//solution:
function isPower(n) {
    if(Math.sqrt(n)%1 === 0) return true;
    for(let i = 2; i < n/2; i++){
        let sum = 0;
        let power = 3;
        while(sum < n){
            sum = i**power;
            if(sum === n) return true;
            power++
        }
    }
    return false
}
//============================================

// 18)We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

// It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

// what is the weakness of the weakest numbers in the range [1, n]?
// how many numbers in the range [1, n] have this weakness?
// Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.

//solution:
function weakNumbers(n) {
    let divisorArr = [0]
    let weakArr = []
    for(let i = 1; i<=n; i++){
        let count = 1;
        for(let j = 1 ; j <= i; j++){
            if(i%j === 0) count ++
        }
        divisorArr.push(count)
        let weakness = divisorArr.filter(x=> x > count).length
        weakArr.push(weakness)
    }
    let weakest = Math.max(...weakArr)
    console.log(weakArr)
    return [weakest, weakArr.filter(x=> x===weakest).length]
}
//============================================

// 19)You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

// Given the starting HTML tag, find the appropriate end tag which your editor should propose.

// If you are not familiar with HTML, consult with this note.

//solution:
function htmlEndTagByStartTag(startTag) {
    let tag = startTag.split(' ')[0].replace('<','')
    return tag.includes('>') ? `</${tag}`:`</${tag}>`
}