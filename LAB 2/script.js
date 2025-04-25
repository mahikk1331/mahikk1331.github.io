var kitty = {
    cute: true,
    fluffy: true,
    meow: undefined,
    hungry: 0.2,
    lives: 9,
    colour: 'red',
    fur: {
        fluffy: true,
        colour: 'red',
    },
    threats: null,

    //annonymous functions have no name- accessor is meow
    meow: function meow(){  //functions are control structures, and also objects 
        return 'meow';       // functions are returned as undefined
    }  // functions contained as a key value pair of an object- method
};
console.log(kitty.meow());  // anything past console.log gets turned into a string and rendered

//objects are key value pairs
// you can put any value, even a funtion (method)
// variable name that undeclared gives an error
console.log(kitty.two);
// an undeclared perameter of an object gives undefined but no error

 kitty.lives++;
 console.log(kitty); // given kitty 10 lives

 kitty.two = 'two'; // if value exists; update
 console.log(kitty);// if not, it establishes

 kitty.travel(); //error
 kitty.travel; //undefined



// . - dot is the accessor of an object
if(kitty.fur.fluffy){
    console.log('true');
}else{
   console.log('false');
}

if(kitty){ 
 console.log('true');
}else{
    console.log('false'); // all objects; even undefined make a boolean thats true
}

if(null){
    console.log('true');
}else{
    console.log('false'); // null is always false 
}


var x = {};
x.y = 12; // mutates objects with assignment
x.z; // returns undefined
x.z() // throws an error to invoke undefined as a function 
x.z = function(){}; //method
x.z(); // invoke the z method and returns undefined unless modified

for(key in kitty ){ //generics
    console.log(key);
    kitty[key]; //alternative accessor for objects in javascript
    //kitty['meow' + count]
}