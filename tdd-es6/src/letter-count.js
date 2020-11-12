// 'cat' -> { c: 1, a: 1, t:1 }
// 'better' -> { b: 1, e: 2, t: 2, r: 1 }
// this is what we want our test to check for


export const getLetterCount = (string) => {
    const letters = string.split(''); // REMEMBER .split() returns an array
    let letterCount = {};

    letters.forEach( letter => { // for each letter we are checking to see if the letter count object
        if(!letterCount[letter]){ // doesnt already have a value for that letter
            letterCount[letter] = 1;
        }
        else{
            letterCount[letter] += 1; // this increments the value of the key
        }
    });

    return letterCount; // dont forget to return otherwise both tests would have failed
};


// NOTE: TDD's ENTIRE concept is FIRST making the test before ANY code.

