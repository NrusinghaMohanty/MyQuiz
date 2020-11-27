var readlineSync=require("readline-sync");
var score=0;
var username=readlineSync.question("What is your name ??\n")
console.log("\nHye," + username +" do you know Babul??\n")
console.log("---------------------------------------------")

var questions=[{question:`1) Where does Babul live? 

Answer: `,answer:"puri"},
{question:`2) Where does Babul work?

Answer: `,answer:"bbsr"},
{question:`3) what is Babul favorite hobby?

Answer: `,answer:"dance"},
{question:`4) what is babul favorite dish?

Answer: `,answer:"biriyani"}];


function play(question,answer){
  var useranswer=readlineSync.question(question);
  if(useranswer.toUpperCase()==answer.toUpperCase()){
    console.log("Yesss!!!you are right")
    score=score+1;
  }else{
    console.log("Sorry!!!you are wrong")
    console.log("The right answer is: " +answer)
  }
  {
    console.log("Your curent score is:" + score)
    console.log("---------------------------------------")
  }
}

var useranswer2=readlineSync.question("If yes then press any key otherwise you can quit by pressing n ")


if(useranswer2.toLowerCase()=="n"){
  console.clear();
  console.log("Quit")
}else{
  console.log("\n\nSo you know babul!!!!Great")
  console.log("Let's see how much you know babul.\nThere are 4 question ,For each right answer you will get 1 point\n")
  console.log("--------------------------------------")
  for(i=0;i<questions.length;i++){
  currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
  }
}

console.log("So,here is yours final score:"+ score)