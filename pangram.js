Pangram = function(input) {
    this.input = input;
    }



Pangram.prototype.isPangram = function(input) {
    if (this.input === '') {
        return false;
    }
   
}


module.exports = Pangram;
