//1.calculateDifference 
function calculateDifference (a, b){
    return a - b;
}
console.log("calculateDifference : ", calculateDifference(10,5));
//2.isOdd

function isOdd(a){
    if(a % 2 !== 0){
        return true;
    }
    else
    {
        return false;
    }
}

console.log("isOdd : "+ isOdd(7));
console.log("isOdd : "+ isOdd(8));

//3.findMin 

function findMin (arr){
    return Math.min(...arr);
}
console.log("Smallest Number :",findMin([100,50,200,5]));

//4.filterEvenNumbers

function filterEvenNumbers(arr){
    return arr.filter(num=> num % 2 ===0)
}
console.log("Even Number :",filterEvenNumbers([10,5,8,3,6]));

//5.sortArrayDescending
function sortArrayDescending(arr){
    return [...arr].sort((a, b) => b - a);

}

console.log("Sort array decenting Number :",sortArrayDescending([1,5,10,8,3,6]));

//6.lowercaseFirstLetter

function lowercaseFirstLetter(str){

    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lower case first letter: ",lowercaseFirstLetter("SHISHIR"));

//7.findAverage

function findAverage(arr){
    const sum = arr.reduce((acc, num)=> acc +num,0);
    return sum / arr.length;
}

console.log("Find average : ",findAverage([10,20,30,40]));

//8.isLeapYear

function isLeapYear(year){

    return (year % 4 === 0 && year % 100 !== 0 || year % 4 ===0);
}

console.log("Is 2024 a leap year?:", isLeapYear(2024));
console.log("Is 2026 a leap year?:", isLeapYear(2026));