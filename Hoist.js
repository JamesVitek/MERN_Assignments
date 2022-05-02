// console.log(hello);
// var hello = 'world';

// var Hello
// console log hello
// hello = world
// undefined - correct

// ============================ 1

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// needle = haystack
// runs function test
// needle = magnet 
// prints magnet - correct

// ============================ 2

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// brendan = super cool
// prints super cool

// note - function never called - correct

// ============================ 3

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// food = chicken
// prints chicken
// food = half-chicken
// prints half chicken
// food = gone
// - correct

// ============================ 4

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// calls function
// food = chicken
// prints chicken
// food = fish 
// prints fish
// prints fish line 58

// - Casues error printing food without defined - Wrong

// ============================ 5

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

/*
var genre
prints undefined
genre = disco
calls function
genre = rock
prints rock
genre = r&b
prints r&b
outside of functions prints disco

-correct
*/ 

// ============================ 6

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

/*
dojo = san jose
prints san jose
calls function learn
var dojo
dojo = seattle
prints seattle
dojo = burbank
prints burbank
outside of fun prints san jose
*/

// ============================ 7

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

/*
calls function with chicago and 65
name = chicago
students = 65
dojo {}
dojo{name:chicago}
dojo{name:chicago, students:65}
dojo{name:chicago, students:65, hiring:true}
returns and prints {name:chicago, students:65, hiring:true}

calls function with berkely and 65
name = berkely
students = 0
dojo {}
dojo{name:berkely}
dojo{name:berkely, students:0}
tries to assign to dojo const
errors

- correct
*/

// ============================ 8