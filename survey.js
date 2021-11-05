const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionArr = [
  "What's your name? Nicknames are also acceptable ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];



let ans = [];


const profileGenerator = function(index, questionArr) {
  if (index === questionArr.length) {
    console.log(`Hello, my name is ${ans[0]}. I like to ${ans[1]} while listening to ${ans[2]}. My favourite meal is ${ans[3]} and my favourite thing to eat for that meal is ${ans[4]}. My favourite sport is ${ans[5]} and my super power is ${ans[6]}.`);
    rl.close();
  } else {
    rl.question(questionArr[index], (answer) => {
      ans.push(answer);
      profileGenerator((index + 1), questionArr);
    });
  }
};

profileGenerator(0, questionArr);
