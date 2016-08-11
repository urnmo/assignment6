

console.log('**The Tallest Mountain**')

//need array
let mountains = [1000, 2, 3000, 4000, 5]
let biggest = 0


//need to identify the tallest height from the array
// compare the value of 0 to value of 1, 
// if 1 is higher than 0 compare the result to value 2
// if 1 is not higher than 0 compare the result to value 2

// keep track of the 'biggest'
// if mount[i] is bigger than everything we've seen, its the new biggest


for (let i = 0; i < mountains.length; i++) {
    if (biggest > mountains[i]) {
        biggest = biggest
    }
    else { biggest = mountains[i] }

    // if (mountains[i] > biggest) {
    // biggest=mountains[i];
    // }
}
console.log(biggest)


console.log("**Hangman Lite**")

let word = "farthead";
let letter = "a";
let count = 0;


for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
        count = count + 1;
    }
} if (count > 0) {

    console.log("Yeah, the letter " + letter + " exists " + count + " times in my word.");

} else {
    console.log("Nope, that letter doesn't exist in my word")
}

console.log("**Cherokee Hare**")

let startingPopulation = 10000;
let birthRate = .666;
let numberOfWeeks = 6;

for (let i = 0; i < numberOfWeeks; i++) {
    startingPopulation = birthRate * startingPopulation + startingPopulation;
}
console.log(startingPopulation)




console.log("**Change machine**")

let amount = 56;
let x = 20
let y = 10
let z = 5
let a = 1

for (let i = 0; i < amount; i++) {
    amount = amount % x; {
       if (amount < 20) {
            amount = amount % y; {
                if (amount < 10) {
                    amount = amount % z; {
                        if (amount < 5) {
                            amount = amount % a;{
                                console.log (amount)
                            }
                        }
                    }
                }
            }
       }
}

}


console.log ("**Finding palindromes**")

let words = "tot";

    for (let i = 0; i < word.length; i++){
       if (words[i]=== 2+1+0) {
           console.log("x"); 
               }else{ console.log ("y")
           
       }
        
        }

