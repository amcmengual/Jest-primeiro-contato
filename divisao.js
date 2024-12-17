
function divisao(a, b) {
    if (b === 0 || a / b === Infinity) {
      return 0; 
    }
    return a / b; 
  }
  module.exports = divisao;
  