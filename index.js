// Code your solutions in this file
/*for (let age =30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }
    return gifts;
}

wrapGifts(gifts);
*/


function writeCards(array, string){
    const newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

writeCards(["Ada", "Brendan", "Alii"], "birthday");

function countDown(number) {
    while (number >= 0) [
        console.log(number--)
    ]
}

countDown(10);