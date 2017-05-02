var square = x => x * x;

console.log(square(9));

var user = {
    name: 'Julie',
    // sayHi: () => {
    //     console.log(arguments) //gets global arguments object
    //     console.log(`Hello. I'm ${this.name}.name`); //Doesn't work in ES6 because ES6 does not bind this
    // },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHiAlt(1, 2, 3);