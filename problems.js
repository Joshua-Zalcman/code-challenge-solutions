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
// 10)You have k apple boxes full of apples. Each square box of size m contains m ?? m apples. You just noticed two interesting properties about the boxes:

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
 // 35)Given a rectangular matrix containing only digits, calculate the number of different 2 ?? 2 squares in it.

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
// 49)You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 * 104, ..., the 100th one should contain numbers from 99 * 104 + 1 to 106 and so on.

// All the numbers will then be written down in groups to the text file in such a way that:

// the groups go one after another;
// each non-empty group has a header which occupies one line;
// each number in a group occupies one line.
// Calculate how many lines the resulting text file will have.

//solution:
function numbersGrouping(a) {
    let arr = []
    for(let i = 0; i < a.length; i++){
        let num = Math.ceil(a[i]/10000)
            arr.push(num)
    }
    return Array.from(new Set(arr)).length + a.length
}
// 50)Given a rectangular matrix containing only digits, calculate the number of different 2 ?? 2 squares in it.

//solution:
function differentSquares(matrix) {
    let arr = []
    for(let i = 0; i < matrix.length-1; i++){
       for(let j = 0; j < matrix[0].length -1; j++){
           let num = `${matrix[i][j]}${matrix[i][j+1]}${matrix[i+1][j]}${matrix[i+1][j+1]}`
           arr.push(num)
        } 
    }
    return Array.from(new Set(arr)).length
}
// 51)A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.

// Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.

//solution:
function mostFrequentDigitSum(n) {
    let arr = []
    while(n > 0){
        let digSum =  n.toString().split('').reduce((acc,it)=>acc+(+it),0)
        arr.push(digSum)
        n = n - digSum
    }
    let hash = new Map()
    for(let i = 0; i < arr.length; i++){
        if(hash.has(arr[i])){
            hash.set(arr[i],hash.get(arr[i])+1)
        } else{
            hash.set(arr[i],1)
        }
    }
    let max_count = 0, res = 1
    hash.forEach((value,key) => {
        if (max_count < value) {
            res = key
            max_count = value
        } else if(max_count === value){
            if(key > res){
                res = key
                max_count = value
            }
        }
    });
    return res
}
// 52)Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

// Define a string reflection as the result of applying the alphabet reflection to each of its characters.

// Reflect the given string.

//solution:
function reflectString(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let arr = []
    for( let i = 0; i < str.length; i++){
        let letter = alphabet[alphabet.length - 1 - alphabet.indexOf(str[i])]
        arr.push(letter)
    }
    return arr.join('')
}
// 53)Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

// The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

//solution:
function newNumeralSystem(number) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let arr = []
    let num = alphabet.indexOf(number)
    let count = 0
    while(count <= num ){
        arr.push(`${alphabet[count]} + ${alphabet[num]}`)
        num--
        count++
    }
    return arr
}
// 54)Given a character, check if it represents an odd digit, an even digit or not a digit at all.

//solution:
function characterParity(symbol) {
    if(Number.isNaN(+symbol)) return 'not a digit'
    return +symbol % 2 === 0 ? 'even' : 'odd'
}
// 55)When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

// The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.



//solution:
function stolenLunch(note) {
    let alphabet = 'abcdefghij'.split('')
    return note.split('').map(x=> /[a-j]/.test(x) ? alphabet.indexOf(x) : /[0-9]/.test(x) ? alphabet[+x] : x).join('')
}
// 56)Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.

//solution:
function higherVersion(ver1, ver2) {
    let arr1 = ver1.split('.')
    let arr2 = ver2.split('.')
    let i = 0
    while(i < arr1.length){
        if(+arr1[i] > +arr2[i]) return true
        if(+arr1[i] < +arr2[i]) return false
        i++
    }
    return false
}
// 56)Consider the following ciphering algorithm:

// For each character replace it with its code.
// Concatenate all of the obtained numbers.
// Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

//solution:
function decipher(cipher) {
    let code = []
    let arr = cipher.split('')
    for(let i = 0; i < arr.length; i+0){
        console.log('i:',i)
        let num = (arr[i].concat(arr[i+1]))
        console.log(num)
        if( num >= 97){
            i = i+2
            code.push(String.fromCharCode(num))
        } else {
            num = num.concat(arr[i+2])
            console.log(num)
            i = i+3
            code.push(String.fromCharCode(num))
        }
    }
    return code.join('')
}
// 57)Given an array of 2^k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

//solution:
function arrayConversion(arr) {
    let odd = true
    while(arr.length > 1){
            arr = arr.map((x,i,array)=> i%2 === 0 ? odd ? x + array[i+1] : x * array[i+1] : 'a' ).filter(x=> x!=='a')
            odd = !odd
    }
    return arr[0]
}
// 58)Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

//solution:
function arrayPreviousLess(items) {
    let arr = []
    for(let i = 0; i < items.length; i++){
        let value = -1
        for(let j = 0; j < i; j++){
            if(items[j] < items[i]) value = items[j]   
        }
        arr.push(value)
    }
    return arr
}
// 59)Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

//solution:
function pairOfShoes(shoes) {
    while(shoes.length > 0){
        let match = shoes.length
        for(let j= 1; j<shoes.length;j++){
            if(shoes[0][0]+shoes[j][0] === 1 && shoes[0][1] === shoes[j][1]){
          shoes =  shoes.filter((x,i)=>i !== 0 && i !== j )  
            }
        }
         if (match === shoes.length) return false
    }
    return true
}
// 60)Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).

//solution:
function extractMatrixColumn(matrix, column) {
    return matrix.map(x=> x[column])
}
// 61)The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

//solution:
function reverseOnDiagonals(matrix) {
    for(let i = 0; i< matrix.length/2; i++){
        //left flip
        let temp = matrix[i][i]
        matrix[i][i] = matrix[matrix.length-1-i][matrix.length-1-i]
        matrix[matrix.length-1-i][matrix.length-1-i] = temp
        //right flip
        let temp2 = matrix[i][matrix.length-1-i]
        matrix[i][matrix.length-1-i] = matrix[matrix.length-1-i][i]
        matrix[matrix.length-1-i][i] = temp2
    }
    return matrix
}
// 62)Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

// Given two two-dimensional arrays, check if they are isomorphic.

//solution:
function areIsomorphic(array1, array2) {
    if(array1.length !== array2.length) return false
    for(let i = 0; i< array1.length; i++){
        if(array1[i].length !== array2[i].length) return false
    }
    return true
}
// 63)You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

// The team you favor plays in the following formation:

// 0 3 0
// 4 0 2
// 0 6 0
// 5 0 1
// where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.

// Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.

//solution:
function volleyballPositions(frm, k) {
    k = k%6
    let players=[frm[3][2],frm[1][2],frm[0][1],frm[1][0],frm[3][0],frm[2][1]]
    while(k>0){
        let player = players.pop()
        players.unshift(player)
        k--
    }
    frm[3][2]= players[0]
    frm[1][2]= players[1]
    frm[0][1]= players[2]
    frm[1][0]= players[3]
    frm[3][0]= players[4]
    frm[2][1]= players[5]
    return frm
}
// 64)Sudoku is a number-placement puzzle. The objective is to fill a 9 ?? 9 grid with digits so that each column, each row, and each of the nine 3 ?? 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

//solution:
function sudoku(grid) {
    for(let i = 0; i < 9; i++){
        if(Array.from(new Set(grid[i])).length !== 9) return false
        let arr = []
        let square = []
        for(let j=0;j<9;j++){
            arr.push(grid[j][i])
            if(i === 1 || i === 4 || i === 7){
                if(j === 1 || j === 4 || j ===7){
                    square = [grid[j][i],grid[j][i+1],grid[j][i-1],grid[j+1][i],grid[j-1][i],grid[j-1][i-1],grid[j+1][i+1],grid[j-1][i+1],grid[j+1][i-1],]
                }
            }
        }
        if(square.length > 0){
            if(Array.from(new Set(square)).length !== 9) return false
        }
        if(Array.from(new Set(arr)).length !== 9) return false
    }
    return true
}

// 65)In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

//solution:
function minesweeper(matrix) {
    let grid = []
    for(let i = 0; i < matrix.length; i++){
        let arr = []
        for(let j = 0; j<matrix[0].length; j++){
            let count = 0
            if(i>0){
                if(j>0){
                    if(matrix[i-1][j-1]) count++
                }
                if(matrix[i-1][j]) count++
                if(j<matrix[0].length-1){
                    if(matrix[i-1][j+1]) count++
                }   
            }
            if(j>0){
               if(matrix[i][j-1]) count++ 
            }
            if(j<matrix[0].length-1){
               if(matrix[i][j+1]) count++ 
            }
            if(i<matrix.length-1){
                if(j>0){
                   if(matrix[i+1][j-1]) count++ 
                }
                if(matrix[i+1][j]) count++
                if(j<matrix[0].length-1){
                    if(matrix[i+1][j+1]) count++     
                }
            }
            arr.push(count)
        }
        grid.push(arr)
    }
    return grid
}
// 66)The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 ?? 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

//solution:
function boxBlur(image) {
    let grid = []
    for(let i = 1; i < image.length-1; i++){
        let arr = []
        for(let j = 1; j<image[0].length-1; j++){
            let sum = Math.floor((image[i][j] + image[i-1][j-1] +image[i-1][j] +image[i-1][j+1] +image[i][j-1] +image[i][j+1] +image[i+1][j-1] +image[i+1][j] +image[i+1][j+1])/9)
            arr.push(sum)
        }
        grid.push(arr)
    }
    return grid
}
// 67)You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

// Find the perimeter of the black figure assuming that a single cell has unit length.

// It's guaranteed that there is at least one black cell on the table.

//solution:
function polygonPerimeter(matrix) {
    let count = 0
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(matrix[i][j]){
                if(i === 0 || i === matrix.length-1){
                   count++ 
                   if(i === 0 && !matrix[i+1][j] || i === matrix.length-1 && !matrix[i-1][j]) count++
                } else{
                    if(!matrix[i-1][j])count++
                    if(!matrix[i+1][j])count++
                } 
                if(j === 0 || j === matrix[0].length-1){
                    count++
                    if(j === 0 && !matrix[i][j+1] || j === matrix[0].length-1 && !matrix[i][j-1]) count++
                } else{
                    if(!matrix[i][j-1])count++
                    if(!matrix[i][j+1])count++
                } 
            }
        }
    }
    return count
}
// 68)Court is in session. We got a group of witnesses who have all taken an oath to tell the truth. The prosecutor is pointing at the defendants one by one and asking each witnesses a simple question - "guilty or not?". The witnesses are allowed to respond in one of the following three ways:

// I am sure he/she is guilty.
// I am sure he/she is innocent.
// I have no idea.
// The prosecutor has a hunch that one of the witnesses might not be telling the truth so she decides to cross-check all of their testimonies and see if the information gathered is consistent, i.e. there are no two witnesses A and B and a defendant C such that A says C is guilty while B says C is innocent.

//solution:
function isInformationConsistent(evidences) {
    for(let i = 0; i< evidences[0].length; i++){
        let arr = []
        for(let j = 0; j<evidences.length;j++){
            if(evidences[j][i] === 0) continue
            if(arr.includes((evidences[j][i])*(-1))){
                return false
            } else {
                arr.push(evidences[j][i])
            }
        }
    }
    return true
}
// 69)A noob programmer was given two simple tasks: sum and sort the elements of the given array
// a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array a, and it's giving him trouble since he modified it.

// Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an.


//solution:
function shuffledArray(shuffled) {
    let sum = shuffled.reduce((acc,item)=> acc+item,0)
    let index = shuffled.indexOf(sum/2)
    return shuffled.filter((x,i)=> i!== index).sort((a,b)=> a - b)
}
// 70)Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

//solution:
function sortByHeight(a) {
    var sorted = a.filter(h => h != -1).sort((a,b) => a-b)
    
    var j = 0
    
    return a.map((h, i) =>  h != -1 ? sorted[j++] : h)
}
// 71)Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

//solution:
function sortByLength(arr) {
    return arr.sort((a,b)=>a.length-b.length)
}
// 72)You are given an array of integers a. A range sum query is defined by a pair of non-negative integers l and r (l <= r). The output to a range sum query on the given array a is the sum of all the elements of a that have indices from l to r, inclusive.

// You have the array a and a list of range sum queries q. Find an algorithm that can rearrange the array a in such a way that the total sum of all of the query outputs is maximized, and return this total sum.

//solution:
function maximumSum(a, q) {
    let arr = [...a].sort((a,b)=>b-a)
    let map = {}
    q.forEach(x=>{
        let i = x[0]
        while(i<=x[1]){
            if(map[i]){
                map[i] = map[i] + 1
            } else{
                map[i] = 1
            }
            i++
        }
    })
    let order = Object.entries(map).sort((a,b)=> b[1]-a[[1]])
    for(let j = 0 ; j<order.length; j++){
        let temp = arr[j]
        a[+order[j][0]] = temp
    }
    let sum = 0
    q.forEach(x=>{
        let rangeSum = a.slice(x[0],x[1]+1).reduce((acc,item)=>acc+item,0)
        sum += rangeSum
    })
    return sum
}
// 73)Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

//solution:
function rowsRearranging(matrix) {
    matrix.sort((a,b)=> a[0]-b[0])
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 1; j < matrix.length; j++){
            if(matrix[j][i] <= matrix[j-1][i]){
              return false  
            } 
        }
    }
    return true
}
// 74)Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.

//solution:
function digitDifferenceSort(a) {
    let arr = a.map((x,i)=> {
        let num = x.toString().split('').map((x)=> +x)
        let diff = Math.max(...num) - Math.min(...num)
        return [x,diff,i]
    })
    console.log(arr)
    return arr.sort((a,b)=> a[1]===b[1]? b[2]-a[2] :  a[1]-b[1]).map(x=> x[0])
}
// 75)Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.

//solution:
function uniqueDigitProducts(a) {
    let arr = a.map(x=> x.toString().split('').reduce((acc,item)=> acc*(+item),1))
    return (new Set(arr)).size
}
// 76)Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 

//solution:
function bishopAndPawn(bishop, pawn) {
    const arr = 'abcdefgh'.split('')
    let bLetter = arr.indexOf(bishop[0])
    let pLetter = arr.indexOf(pawn[0])
    let bNumber = +bishop[1]
    let pNumber = +pawn[1]
    return Math.abs(bLetter - pLetter) === Math.abs(bNumber - pNumber)
}
// 77)Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

//solution:
function solution(cell) {
    let count = 8
    let cond = 0
    if(cell[0]==='a' || cell[0]==='h'){
        count-=4
        cond +=2
    } 
    if(cell[0]==='b' || cell[0]==='g'){
        count-=2
        cond +=1
    } 
    if(cell[1]==='1' || cell[1]==='8'){
        if(cond === 2){
            count-=2
        } else if(cond === 1){
            count -=3
        } else {
            count -=4
        }
    }
    if(cell[1]==='2' || cell[1]==='7'){
        if(cond === 2){
            count-=1
        } else if(cond === 1){
            count -=2
        } else {
            count -=2
        }
    }
    return count
}
// 78)Check if the given string is a correct time representation of the 24-hour clock.

//solution:
function solution(time) {
    let arr = time.split(':')
    return +arr[0] < 24 && +arr[0] >= 0 && +arr[1] >= 0 && +arr[1] <= 59
}
// 79)You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

//solution:
function solution(part, total) {
    let partS = toSeconds(part.split(':'))
    let totalS = toSeconds(total.split(':'))
    let gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(partS,totalS);
  return [partS/gcd, totalS/gcd];
}

function toSeconds(arr){
    return (+arr[0])*60*60 + (+arr[1])*60
+ (+arr[2])}

// 80)Whenever you decide to celebrate your birthday you always do this your favorite caf??, which is quite popular and as such usually very crowded. This year you got lucky: when you and your friend enter the caf?? you're surprised to see that it's almost empty. The waiter lets slip that there are always very few people on this day of the week.

// You enjoyed having the caf?? all to yourself, and are now curious about the next time you'll be this lucky. Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.

// For your convenience, here is the list of months lengths (from January to December, respectively):

// Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
// Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year.

//solution:
function solution(birthdayDate) {
    let day = (new Date(birthdayDate)).getUTCDay()
    let count = 1
    let leap = false
    let arr = birthdayDate.split('-')
    if(arr[0] === '02' && arr[1]==='29'){
        count = 4
        leap = true
    } 
    arr[2] = +arr[2]
    let nextDay = -1
    while(nextDay !== day){
        if(leap){
            arr[2] += 4
            if(arr[2]%100===0){
                count+=4
                continue
            } 
        } else{
            arr[2]++
        }
        nextDay = (new Date(arr.join('-'))).getUTCDay()
        if(nextDay === day){
          return count  
        } else {
            if(leap){
                count+=4
            }else{
                count++
            }
        }
    }
}
// 81)You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ??? pi ??? n) that for each 1 ??? i < n the box number pi can be put into the box number pi+1.
// A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

//solution:
function solution(length, width, height) {
    let boxes = []
    for(let i = 0; i<length.length; i++){
        let box = [length[i],width[i],height[i]].sort((a,b)=>b-a)
        boxes.push(box)
    }
    boxes.sort((a,b)=> b[0]-a[0])
    for(let j = 1; j<boxes.length; j++){
        if(boxes[j][0] >= boxes[j-1][0]) return false
        if(boxes[j][1] >= boxes[j-1][1]) return false
        if(boxes[j][2] >= boxes[j-1][2]) return false
    }
    return true
}