// console.log("Testing");
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(i," x ",j," = ",i*j)
//     }
// }

// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }


// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     let message = "%c" + txt;
//     let style =  `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`
//     console.log(message, style)
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     let fontStyle = "color: tomato; font-size: 50px";

//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }

// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
//     consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
//     celebrateStyler('birthday')

// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt,reason) {
//     consoleStyler(color, background, fontSize, txt);
//     celebrateStyler(reason);
// }
// // Call styleAndCelebrate
// styleAndCelebrate('ef7c8e','fae8e0','30px','You made it!','champions' )

// function two() {
//     return 2;
// }

// function one() {
//     return 1;
// }

// function calculate(initialValue, incrementValue) {
//     return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one));

console.log(new Date())
// console.log(new Math()); // TypeError: Math is not a constructor
class Human {
    constructor(skinColor, gender){
        this.skinColor = skinColor;
        this.gender = gender;
    }
    getSelf(){
        console.log(this)
    }
    declareGender(){
        console.log("I am a human and my gender is ", this.gender);
    }
    getProto(){
        let proto =  Object.getPrototypeOf(this)
        console.log(proto)
    }
}

let woman = new Human("Black", "Female");

console.log(woman.gender);
console.log(woman.declareGender());
console.log(woman.getSelf());
woman.getProto();