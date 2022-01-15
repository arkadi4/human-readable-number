module.exports = function toReadable (n) {
  //function toReadable (n) {
    var word = [],
        numbers = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', t3: 'thir', t5: 'fif', t8: 'eigh', 20: 'twenty' },
        hundreds = 0 | (n % 1000) / 100,
        tens = 0 | (n % 100) / 10,
        ones = n % 10,
        part;

    if (n === 0) return 'zero';
    if (hundreds) word.push(numbers[hundreds] + ' hundred');

    if (tens === 0) {
        word.push(numbers[ones]);
    } else if (tens === 1) {
        word.push(numbers['1' + ones] || (numbers['t' + ones] || numbers[ones]) + 'teen');
    } else {
        part = numbers[tens + '0'] || (numbers['t' + tens] || numbers[tens]) + 'ty';
        word.push(numbers[ones] ? part + ' ' + numbers[ones] : part);
    }
    return word.join(' ');
}



  
//console.log(toReadable(125))
