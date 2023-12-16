const assertEqual = require('./assertEqual');


  const head = function(input) {
    if (input.length > 0) {
        return input[0];
    } else {
        return false;
    }
  }

  
module.exports = head;