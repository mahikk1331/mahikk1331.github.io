var billy;
console.log(billy);

billy = 13;
billy = "billy is a mf";

// keyword expression codeblock
if(true){

     console.log(billy);
}

if( 5 < 15 ){
   console.log('is it true?');
}

billy = "silly";  // declared and defined
if(billy ){   // coersion change string to boolean- if string has anything in it its true, if string is left empty; false
  console.log('billy is  silly');

}
if(billy === 'silly'){  // === testing for equal value and same type
      console.log('really silly');

}

// == testing for equal values but allows coersion
// billy == true (either true to string or billy to boolean)

// typeof operator precedes a variable name or value 
console.log(typeof 3);  // literal number
console.log(typeof 'gdg');  // literal string 

if(typeof billy === "string"){
   billy = 'bsoufhofi'; 


}else{
    billy = 50;
}

// for loop 

for(var i = 0; i < 5; i++){  // 
    console.log('hello');
}

for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log(i);  //most coding languages scope only exixts within parenthesis, but here i exists even after and the code still runs



// we have declared a function - function declaration
function bob(){
    console.log('i am bob');
}

// function invocation
bob(); // () function invocation operator

for(var i = 0; i < 10; i++){
    bob();
}

/*  - this is a multi line comment
*/

console.log( bob() ); 

// java puts return undefined at the end of every function. it we put
// return "bob"  it will just put bob as an output and not undefined

function bailey(data){
  console.log(data);
  return undefined;
}

bailey(50);

function bailey(data){
  data = data + 100;
  return data;

}

var mydata = bailey(50);
console.log(mydata);
