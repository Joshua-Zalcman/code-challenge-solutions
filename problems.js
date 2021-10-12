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
//============================================

// 20)A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.



//solution:
function isMAC48Address(str) {
    let arr = str.split('-')
    if(arr.length !== 6) return false
    let arr2 = arr.join('').split('')
    if(arr2.length !== 12) return false
    for(let i = 0; i < arr2.length; i++){
        let check = /[0123456789ABCDEF]/g.test(arr2[i])
        if(!check) return false
    }
    return true
}
//============================================

// 21)You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

// It's guaranteed that you can number the current page, and that you can't number the last one in the book.



//solution:
function pagesNumberingWithInk(current, numberOfDigits) {
    while(numberOfDigits >= current.toString().length ){
        numberOfDigits = numberOfDigits - current.toString().length
        current++
    }
    return current-1
}
//============================================

// 22)A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

// A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

// Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.



//solution:
function isSubstitutionCipher(string1, string2) {
    let arr1 = string1.split('')
    let arr2 = string2.split('')
    let obj1 = {}
    let obj2 = {}
    for(let i=0;i<arr1.length; i++){
        if(obj1[arr1[i]]){
            if(obj1[arr1[i]] !== arr2[i]) return false
        }else{
            obj1[arr1[i]] = arr2[i]
        }
        if(obj2[arr2[i]]){
            if(obj2[arr2[i]] !== arr1[i]) return false
        }else{
            obj2[arr2[i]] = arr1[i]
        }
    }
    return true
}

//============================================

// 23)
// Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

// Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.


//solution:
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let count = 0;
    let height = 0;
    while(height < desiredHeight){
        height += upSpeed;
        count++
        if(height >= desiredHeight){
          return count  
        } else{
            height -= downSpeed
        }
    }
}
//============================================

// 24)Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.


//solution:
function digitDegree(n) {
    let count = 0
    while(n >= 10){
        n = n.toString().split('').reduce((ac,num)=> ac +(+num),0)
        count++
    }
    return count
}
    //============================================

// 25)Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


//solution:
function bishopAndPawn(bishop, pawn) {
    let letters = ['a','b','c','d','e','f','g','h']
    let options = []
    let pos = bishop.split('')[0]
    let num = +bishop.split('')[1]
    let index = letters.indexOf(pos)
    for(let i = 0; i < letters.length; i++){
        if(letters[i]!==pos){
            if(num+(index - i)<=8)options.push(letters[i].concat(num+(index-i)))
            if(num-(index - i)>=1)options.push(letters[i].concat(num-(index -i)))
        }    
    }
    console.log(options)
    return options.includes(pawn)
}
// 26)A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

// Given a string, check whether it is beautiful.

//solution:
function isBeautifulString(str) {
    let arr = str.split('').sort()
    let letters = Array.from(new Set(arr))
    for(let i=0; i<letters.length; i++){
        if(letters[i] !== 'a'){
            let num = letters[i].charCodeAt(0)
            if(!letters.includes(String.fromCharCode(num-1))){
                return false
            } else {
                let re = new RegExp(letters[i], "g");
                let re2 = new RegExp(String.fromCharCode(num-1), "g");
                let count = str.match(re).length
                let countPrev = str.match(re2).length
                if(count > countPrev) return false
            }
        }
    }
    return true
}
// 27)Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

//solution:
function buildPalindrome(str) {
    let arr = str.split('').reverse()
    if(str === arr.join('')) return str
    for(let i = 1; i< arr.length; i++){
        let chunk = arr.slice(-i).join('')
        let pali = str.concat(chunk)
        if(pali === pali.split('').reverse().join('')) return pali
    }
}
// 28)Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

//solution:
function electionsWinners(votes, k) {
    let lead = Math.max(...votes)
    if(k === 0){
       return  votes.filter(x=> x === lead).length > 1 ?  0 :  1
    }
    let arr = votes.filter(x=> x+k > lead)
    return arr.length
}

// 30)Find the leftmost digit that occurs in a given string.

//solution:
function firstDigit(str) {
    return str.match(/[0-9]/)[0]
}
// 31)Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L.

//solution:
function chessKnight(cell) {
    const boardMoves = [
        [2,3,4,4,4,4,3,2],
        [3,4,6,6,6,6,4,3],
        [4,6,8,8,8,8,6,4],
        [4,6,8,8,8,8,6,4],
        [4,6,8,8,8,8,6,4],
        [4,6,8,8,8,8,6,4],
        [3,4,6,6,6,6,4,3],
        [2,3,4,4,4,4,3,2],
    ]
    let arr = 'abcdefgh'.split('')
    let letter = arr.indexOf(cell[0])
    let num = +cell[1] - 1
    
    return boardMoves[letter][num]
}
// 32)Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

//solution:
function deleteDigit(n) {
    let arr = n.toString().split('')
    let max = 0
    for(let i = 0; i<arr.length; i++){
        let arr2 = arr.filter((x,index)=> index !== i)
        let num = +(arr2.join(''))
        if(num>max) max = num
    }
     return max
}
// 33)Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

//solution:
function longestWord(text) {
    return text.replace(/(\W|_)/g," ").split(" ").sort((a,b)=> b.length-a.length)[0]
 }

 // 34)Check if the given string is a correct time representation of the 24-hour clock.

//solution:
function validTime(time) {
    let arr = time.split(':')
    return +arr[0] < 24 && +arr[1] < 60
}
 // 35)Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

//solution:
function differentSquares(matrix) {
    let arr = []
    for(let i = 0; i < matrix.length-1; i++){
        for(let j = 0; j< matrix[0].length-1; j++){
            let seq = `${matrix[i][j]}${matrix[i][j+1]}${matrix[i+1][j]}${matrix[i+1][j+1]}`
            if(!arr.includes(seq)) arr.push(seq)
        }
    }
    return arr.length
}
// 36)Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

//solution:
function digitsProduct(product) {
    if(product === 0){
         return 10
    } else if( product < 10){
        return product
    } else {
        let f = []
        for(let i = 9; i > 1;i--){
            while(product%i === 0){
                f.push(i)
                product /= i
            }
        }
        return product > 1 ? -1 : +(f.reverse().join(''))
    }
}

// 37)You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

//solution:
function fileNaming(names) {
    for(let i = 0; i < names.length; i++){
        let index = names.indexOf(names[i])
        if(index !== i){
            let number = 1
            while(names.slice(0,i+1).includes(`${names[i]}(${number})`)){
                number++
            }
            names[i] = `${names[i]}(${number})`
        }
    }
    return names
}
// 38)You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

// Assuming that your hunch is correct, decode the message.

//solution:
function messageFromBinaryCode(code) {
    let arr = code.split('').map((x,i)=> i%8===0 ? ' '+x:x).join('').split(' ').slice(1)
    return arr.map(elem => String.fromCharCode(parseInt(elem,2))).join('')
}

// 39)
// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

//solution:
function houseNumbersSum(arr) {
    let sum = 0
    let i = 0
    while(arr[i] !== 0){
        sum += arr[i]
        i++
    }
    return sum
}
// 40)Given an array of strings, return another array containing all of its longest strings.

//solution:
function allLongestStrings(arr) {
    let longest = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i].length > longest) longest = arr[i].length
    }
    return arr.filter(x=> x.length === longest)
}
// 41)There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

//solution:
function houseOfCats(legs) {
    let i
    let arr = []
    if(legs%4===0){
        i = 0
    } else {
        i = 1
    }
    while(legs/2 >= i){
        arr.push(i)
        i += 2
    }
    return arr
}
// 42)Check whether the given string is a subsequence of the plaintext alphabet.


//solution:
function alphabetSubsequence(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arr = s.split('')
    for(let i = 0; i <arr.length - 1 ; i++){
        if(alphabet.lastIndexOf(arr[i]) >= alphabet.lastIndexOf(arr[i+1])) return false
    }
    return true
}
// 43)You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

// The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.


//solution:
function minimalNumberOfCoins(coins, price) {
    let i = coins.length-1
    let coinCount = 0
    while(price > 0){
        if(price>=coins[i]){
            coinCount++
            price -= coins[i]
        } else {
            i--
        }
    }
    return coinCount
}

// 44)Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//solution:
function addBorder(picture) {
    let edge = '*'.repeat(picture[0].length+2)
    let arr = picture.map(x=> '*'+x+"*")
    arr.unshift(edge)
    arr.push(edge)
    return arr
}

// 45)Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.



//solution:
function electionsWinners(votes, k) {
    let max = Math.max(...votes)
    if(k === 0){
       return  votes.filter(x=> x === max).length > 1 ? 0 : 1
    }
    return votes.filter(x=> (x+k)> max).length
}

// 46)Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original

//solution:
function integerToStringOfFixedWidth(number, width) {
    let str = number.toString()
    if(width > str.length) {
        return '0'.repeat(width-str.length)+str
    } else if(width < str.length) {
        return str.slice(str.length - width)
    } else {
        return str
    }
}
// 47)Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

//solution:
function areSimilar(a, b) {
    let indexes = []
    for(let i = 0; i< a.length; i++){
        if(a[i] !== b[i]) indexes.push(i)
    }
    if(indexes.length === 0){
      return true  
    } else if(indexes.length === 2){
        return a[indexes[0]] === b[indexes[1]] && a[indexes[1]] === b[indexes[0]]
    } else {
        return false
    }
}

// 48)You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

//solution:
function createAnagram(s, t) {
    let diff =0
    let arr = s.split('')
    let arr2 = t.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr2.includes(arr[i])){
            let index = arr2.indexOf(arr[i])
            arr2.splice(index,1)
        } else {
           diff++ 
        }
    }
    return diff
}