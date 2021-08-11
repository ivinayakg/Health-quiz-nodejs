var readline = require("readline-sync");

//data of high scores
var highscores = [
  {
    name: "Vinayak",
    score: 8,
  },
  {
    name: "Dhruv",
    score: 5,
  },
  {
    name: "Tanay",
    score: 2,
  },
  {
    name: "Vishal",
    score: 7,
  },
];

//data of questions and answers
var level1 = {
  1: {
    question: "Do You Exercise? ",
    answer: "Yes",
  },
  2: {
    question: "Strength or Muscle: ",
    answer: "Strength",
  },
  3: {
    question: "Do you eat Sugar?  ",
    answer: "No",
  },
  4: {
    question: "Do You Follow A Diet? ",
    answer: "Yes",
  },
  5: {
    question: "Do You sleep 8 hrs? ",
    answer: "Yes",
  },
  6: {
    question: "Do You Sleep Late? ",
    answer: "No",
  },
};

var level2 = {
  1: {
    question: "Do You Meditate? ",
    answer: "Yes",
  },
  2: {
    question: "Pain or Pleasure or both: ",
    answer: "both",
  },
  3: {
    question: "Do you eat Sugar?  ",
    answer: "No",
  },
  4: {
    question: "Do You reflect on your emotion?  ",
    answer: "Yes",
  },
};

// to check wether the ans given and real answer are same?
const check = (ans, ansGiven) => {
  if (ans.toUpperCase() === ansGiven.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

//main function which handles users according to the score and level
function game(level, score, check) {
  var keys = Object.keys(level);
  for (var i = 0; i < keys.length; i++) {
    var ans = readline.question(level[keys[i]].question);
    var result = check(ans, level[keys[i]].answer);
    if (result) {
      score += 1;
      console.log("You Are Right***", `\t\tYour Score Is - ${score}`, "\n\n");
    } else {
      console.log("You Are Wrong-", `\tYour Score Is - ${score}`, "\n\n");
    }
  }
  return score;
}

score = 0;
console.log(
  "Lets See How Much Healthy You Are Both Mentally And Physically\nYou need a score of 8 to pass\n\n"
);
var name = readline.question("What's Your Name?\t\n");

//works while the user doesnt get the advice they need
while (score <= 8) {
  if (score < 5) {
    score = 0;
    score = game(level1, score, check);
    if (score >= 5) {
      console.log("Your Physical Health Is Good \n\n");
      console.log(score); //
    } else {
      console.log("Work On Your physical Health");
      break;
    }
  } else if (score < 7) {
    console.log("Now lets see hows your mental health \n");
    score = game(level2, score, check);
    if (score < 8) {
      console.log("You need to work on your mental health \n");
    } else {
      console.log(
        "You Are Decently Healthy In Terms Of Both Physical And Mentally\n\nKeep It Up"
      );
    }
  } else {
    console.log("Work on your overall health and comeback again");
    break;
  }
}

if (score > 8) {
  console.log(`${name} has broken the score, with ${score - 8}\n\n`);
}

highscores.push({ name: name, score: score });

//at the end compare and share the high scores
function bestPlayer(highScores = highscores) {
  for (var i = 0; i < highScores.length; i++) {
    var uScore = highScores[i].score;
    var uName = highScores[i].name;
    if (uScore > 8) {
      uName = `*${uName}  High Score`;
    } else {
      uName = `-${uName}`;
    }
    console.log(uName, "\t", uScore);
  }
}

bestPlayer();
