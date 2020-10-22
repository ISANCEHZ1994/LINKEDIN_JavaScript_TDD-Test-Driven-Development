export const isAnagram = (str1,str2) => {

    const str1Array = str1.split('');
    const str2Array = str2.split('');

    return str1Array.every(letter => str2Array.includes(letter))
    && str2Array.every(letter => str1Array.includes(letter)) // here we are doing it in reverse for that second check
    // i tried to use .filter() however in the video he used .every() because .every() returns a BOOLEAN value (true/false)
    // with filter => AssertionError: expected [ 'l', 'i', 's', 't', 'e', 'n' ] to deeply equal true
    
};