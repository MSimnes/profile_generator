const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userName;
let holiday;
let band;
let dislike;
let timeOfDay;

rl.question('What is your name? ', (answer) => {
  console.log(`Thanks ${answer}, let's create a cool profile for you.`);
  userName = answer;
  rl.question('Are you ready to answer some fun questions? y/n?', (answer) => {
    if (answer === "n") {
      rl.close();
    } else {
      console.log(`Thanks, ${userName}. let's get started`);
      rl.question(`So ${userName}, what's your favourite holiday?`, (answer) => {
        holiday = answer;
        console.log("Nice choice!");
        rl.question(`What's your favourite band?`, (answer) => {
          band = answer;
          console.log("Intersting!");
          rl.question(`What's food do you dislike?`, (answer) => {
            dislike = answer;
            console.log("Yikes!");
            rl.question(`What's your favourite time of day?`, (answer) => {
              timeOfDay = answer;
              rl.question(`Are you ready for your new profile, y/n?`, (answer) => {
                if (answer === 'n') {
                  console.log(`Sorry ${userName}, please come back when you're ready.`);
                } else {
                  console.log(`Hi I'm ${userName}, my perfect moment would be in the ${timeOfDay} during the ${holiday} season, where I got to listen to ${band} while I throw ${dislike} into the trash bin `);
                }
                rl.close();
              });
            });
          });
        });
      });
    }
  });
});