// import Math

module.exports = function toReadable (number) {
    //function toReadable (number) {
  
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  if (number === 0) return "zero";
  else //return convert_millions(number);

  // function convert_tens(number) {
  if (number < 10) return ones[number];
  else if (number >= 10 && number < 20) return teens[number - 10];
  else if ((number >= 20 && number <= 99) && (number % 10 === 0)) {
      return tens[Math.floor(number / 10)];
    }
  else if ((number >= 20 && number <= 99) ) {
      return tens[Math.floor(number / 10)] + " " + ones[number % 10];
    }
  //function convert_hundreds(number) {
  else if (number >= 100 && ((number % 100) === 0)) {
    return ones[Math.floor(number / 100)] + " hundred";
    }
  else if (number >= 100 && ((number % 100) >= 10 && ((number % 100) < 20))) {
    return ones[Math.floor(number / 100)] + " hundred " + teens[Math.floor((number % 100) - 10)];
    }
  else if (number >= 100 && ((number % 100) >= 1 && ((number % 100) < 10))) {
    return ones[Math.floor(number / 100)] + " hundred " + ones[number % 100];
    }
  else if (number >= 120 && ((number % 10) !== 0)) {
    return ones[Math.floor(number / 100)] + " hundred " + tens[Math.floor((number / 10) % 10)] + " " + ones[number % 10];
    }
  else if (number >= 120 && ((number % 10) === 0)) {
    return ones[Math.floor(number / 100)] + " hundred " + tens[Math.floor((number / 10) % 10)];
    }

  }    
  
//console.log(toReadable(316))
