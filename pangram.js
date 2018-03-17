Pangram = function(input) {
    this.input = input;
    }



Pangram.prototype.isPangram = function(input) {
    if (this.input === '' || /[A-Z]/g.test(this.input) ) {
        return false;
    } else {
        return true;
    }

   
}


module.exports = Pangram;
