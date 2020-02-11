const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => { 
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (food) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (superPower) => {

              console.log(`Hello there my name is ${name}. I like to ${activity} while listening to ${music}. After I would eat ${food} and my favourite is the ${favFood}. My love ${sport}. If I had a superpower it would be ${superPower}.`)

              rl.close();
            })
          })
        })       
      })
    })
  })
});
















// rl.question('What’s your name? ', (name) => {
//   rl.question('What’s an activity you like? ', (activity) => {
//     rl.question('What’s your favourite band? ', (band) => {
//       rl.question('What’s your favourite sport? ', (sport) => {
//         console.log(`My name is ${name} and I like ${activity}. When playing ${sport}, I listen to ${band}.`);
//         rl.close();
//       });
//     });
//   });
// });