//Below is my personal own code to same like tanay

// var readLine = require("readline-sync");
// var username = readLine.question("What's your name ? ");
// console.log("Welcome "+username+"to Do you know Tanay ?");
// var live = readLine.question("Where do I live ? ");
// let score = 0
// if(live === "London"){
//   score++;
//   console.log("right!"); 
// }else{
//   console.log("wrong!");
// }
// console.log("Current Score: "+score)
// console.log("-------------------")

// var superHero = readLine.question("My Favourite Super hero would be ? ")
// if(superHero === "Dhruv"){
//   score++;
//   console.log("right!"); 
// }else{
//   console.log("wrong!");
// }
// console.log("Current Score: "+score)
// console.log("-------------------")

// var work = readLine.question("Where do I work ? ")
// if(work === "Microsoft"){
//   score++;
//   console.log("right!"); 
// }else{
//   console.log("wrong!");
// }
// console.log("Current Score: "+score)
// console.log("-------------------")


//Below is tanay pratap help code

var readLine = require("readline-sync");

var highScore = [
  {
    name:"Tanay",
    score:3
  },
  {
    name:"Vijay",
    score:2
  }
]

var questions = [
  {
    question:"Where do I live ?",
    answer:"London"
  },
  {
    question:"My Favourite super hero ?",
    answer:"Spiderman"
  },
  {
    question:"Where do I work ?",
    answer:"Microsoft"
  }
]

function Welcome(){
  var username = readLine.question("What's your name ? ");
  console.log("Welcome "+username+" to Do you know Tanay ? ");
  console.log("--------------------------")
}

let score = 0;

function Play(){
  questions.map((values) => {
    var input = readLine.question(values.question+" ")  
      if(input.toUpperCase() === values.answer.toUpperCase()){
    score++
    console.log("right!")
  }else{
    console.log("wrong!")
  }
    console.log("Current Score: "+score)
  })
  console.log("--------------------------")
}

function showScore(){
  console.log("Your final score is "+score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  highScore.map((values) => {
    console.log(values.name+" : "+values.score)
  })
}

Welcome();
Play();
showScore(); 
