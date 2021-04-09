const { string } = require("prop-types");

// network bandwith simplified class with methods
class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }

    movieTime() {
      if (this.data - this.users * 5 >= 10){
        return true
      } else {
        return false
      }
    }
}
  
const test = new Network(100, 1)
console.log(test.movieTime())
  
const test2 = new Network(20, 4)
console.log(test2.movieTime())


// balloon attack game with methods
class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
}
  
const balloonAttack = (player1, player2) => {
    for(let i = 1; i <= 10; i++){
       player1.balloonCount -= player2.hitsPerMinute;
       player2.balloonCount -= player1.hitsPerMinute;
       //player1.status();
       //player2.status();
    }

    if (player1.balloonCount > player2.balloonCount) {
        return console.log(player1.name)
    } else if (player2.balloonCount > player1.balloonCount) {
        return console.log(player2.name)
    }

    return console.log(`Tie`)
}
  
const p1 = new Player('Player One', 5);
const p2 = new Player('Player Two', 2);
   
balloonAttack(p1, p2);


//text cipher example
class ShiftCipher {
    constructor(shiftNumber) {
        this.shiftNumber = shiftNumber;
    }

    encrypt(str) {
        str = str.toUpperCase();
        let result = '';

        for (let i = 0; i < str.length; i++) {
            let charNum = str.charCodeAt(i);
            if (charNum <= 90 && charNum >= 65) {
                charNum += this.shiftNumber;
                if (charNum > 90) {
                    charNum -= 26;
                }
            }
            result += String.fromCharCode(charNum);
        }
        return console.log(result);
    }

    decrypt(str) {
        str = str.toLowerCase();
        let result = '';

        for (let i = 0; i < str.length; i++) {
            let charNum = str.charCodeAt(i);
            if (charNum <= 122 && charNum >= 97) {
                charNum -= this.shiftNumber;
                if (charNum < 97) {
                    charNum += 26;
                }
            }
            result += String.fromCharCode(charNum);
        }
        return console.log(result);
    }
}

const cipher = new ShiftCipher(2);
cipher.encrypt('I Love to code!');
cipher.decrypt('K <3 OA RWRRA');

const cipherTest = new ShiftCipher(1);
cipherTest.encrypt('Z');

const cipherTest2 = new ShiftCipher(1);
cipherTest2.decrypt('Z');