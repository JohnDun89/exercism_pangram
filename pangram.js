Pangram = function(input) {
    this.input = input;
    }



Pangram.prototype.isPangram = function (input) {
        console.log(input)
        const regex = /([a-z])(?!.*\1)/g;
        let abc = this.creatABC()
        let str = this.input.split(" ").join("").split("");
        str.forEach(element => {
            this.checkLetter(str[element], abc)
        })
    if (abc.length === 0 ) {
            return true
        } else {
            return false
        }
       
    }
    
    Pangram.prototype.creatABC = function () {
        var abc = "abcdefghijklmnopqrstuvwxyz"
        abc = abc.split("")
        return abc
     }

    Pangram.prototype.checkLetter =  function (letter, arr) {
        arr.forEach(element => {
            if (letter === arr[element]) {
                arr.splice(element, 1)
            }
        });
    }




module.exports = Pangram;


