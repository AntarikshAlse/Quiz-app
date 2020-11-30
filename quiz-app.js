//importing packages

const chalk = require("chalk");
const readlineSync = require("readline-sync");

// initalization
  console.log(chalk.bgCyanBright.bold("Welcome to the interactive quiz?"));
 var name = readlineSync.question("May i have your name please?\n");
 console.log("let's begin " + chalk.green(name));

 var score = 0;
 var highscores = 4;


 // gameplay
 var questions = [
   {
     question : "what chalk property did i use for the welcome part?",
     options : ["Background-color","Bold","both","none of these"],
     answer : "both" 
   },
   
   {question : "what packages are used in this quiz?",
    options : ["readline-Sync","chalk","has-flag","all"],
    answer : "all" ,
   },

   {question : "what chalk property did i use the most?",
    options : ["bg","bold","underline","green"],
    answer : "bg" ,
   },

   {question : "what is the use of chalk ?",
    options : ["Decorate","simplify","style","add more functionality"],
    answer : "style",
   },
 ]

  function gameplay (options,answer,question)
  {  var select_options = readlineSync.keyInSelect(options,question);
    var useranswer = options[select_options];

    if (useranswer.toUppercase() === answer.toUppercase())
      {
        console.log(chalk.bgGreen("you are right!!"));
        score = score + 1 ; 
      }
    else
      {
        console.log(chalk.bgRed("you are wrong!!"));
        score = score - 1 ; 
      }
  }

  for (let i = 0 ; i < questions.length ; i++)
    {
        var currentquestion = questions[i];
        gameplay(currentquestion.options,currentquestion.answer,currentquestion.question)
    }

  // scores

   console.log("your current score is" + chalk.yellow(score));
    if (score >= highscores)
    {
      console.log(chalk.green.bold("Congrats!!! you won"));
    }

    else 
    {
      console.log (chalk.red("try little harder"));
    }