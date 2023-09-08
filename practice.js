// document.getElementById("para").textContent='vanakkam'

// var element=document.createElement('p')
// element.textContent='tamilnadu'
// document.body.appendChild(element);

// var name=prompt("what is your name")
// alert(name);
// window.confirm("are you confirm to close")


// var nam = "thanush";

// let number = 24;

// alert(nam);

// let name = "alagu";
// let num = 21;
// let isalive = true;

// name = "hero";
// nam = "placed"
// console.log(name);

// const variable = 121;


// let person = {
//     personname: "hero",
//     personage: 22,
//     mobile: 12355
// }

// console.log(person.personage);
// console.log(person['personage']);


/*
const calAvg = (a, b, c) => {
    return (a + b + c) / 2;
}

let team1 = calAvg(12, 1, 3);
let team2 = calAvg(15, 11, 10);



let checkWinner = (a, b) => {
    return a > b ? "winner a" : "winner b";
}


const obj = {
    firstname: 'thanush',
    lastname: 'alagu',
    age: 12,
    friends: ['kk', 'kk', 'll']
};

// console.log(checkWinner(team1, team2));

// console.log(obj);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


let array = ['thanush', 'alagu'];
array.push('koushik');
array.pop();
array.push('pushpa');
array.push('kavis');
array.shift();


// //de structuring 
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);
// let [first, , second] = array;
// [second, first] = [first, second];
// console.log(first, second);


//spread operator

let arr = [1, 2, 3];
let newArr = [5, 6, 7, ...arr];
console.log(newArr);

*/


var name="thanush"
console.log(name.split('').reverse().join(''))

console.log([...String(name)].reverse().join(''));


strcmp=(a,b)=>{
    if(a===b)
        return 0
    if(a>b)
        return 1
    else 
       return -1
}


console.log(strcmp("hello","world"));
console.log(strcmp("hello","hello"));


var a="hello";
var b="hello";
console.log(a.localeCompare(b))

var arr=["banana","apple","cinea"];

arr.sort((a,b)=>{
   return a.localeCompare(b);
})

console.log(arr)

wordCount=(val)=>
{
    var wom=val.match(/\S+/g);
    return {
        characterNoSpaces:val.replace(/\s+/g,'').length,
        character:val.length,
        words:wom?wom.length:0,
        lines:val.split(/\r*\n/).length
    };
}

console.log(wordCount("alagu thanush"))

var string="character"
console.log(string.slice(0,5))

// includes means contains

var dup='a'
console.log(dup.repeat(3))

const arrf=[1,2,3,4]

arrf.forEach(val=>{console.log(val)})



