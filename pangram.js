Pangram = function(input) {
    this.input = input;
    }



Pangram.prototype.isPangram = function () {    
    var regex = /([a-z])(?!.*\1)/g;
    const letterArray =(this.input.match(regex) || []);
    if(letterArray.length === 26) {
        return true;
    } else {
        return false;
        }
    }


    
    Pangram.prototype.createABC = function () {
        var abc = "abcdefghijklmnopqrstuvwxyz"
        abc = abc.split("")
        return abc
     }

    Pangram.prototype.checkLetter =  function (letter, arr) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (letter === arr[i]) {
                arr.splice(i, 1)
            }
        }
    }




module.exports = Pangram;

const pangram = new Pangram('the quick brown fox jumps over the lazy dog')

pangram.isPangram()

// if (this.input !== '') {
//     const regex = /([a-z])(?!.*\1)/g;
//     const abc = this.creatABC()
//     // abc is a split up array
//     const str = this.input.split(" ").join("").split("");
//     str.forEach(element => {
//         this.checkLetter(str[element], abc)
//         //here I am checking each letter against abc
//     })

//     if (abc.length === 0 || 26) {
//         return true
//     } else {
//         return false
//     }
// } else {
//     return false;
// }