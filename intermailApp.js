const readline = require('readline');
const { generateMeta } = require('./controllers/openAiCon');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('What is your query ? \n', (title) => {
    generateMeta(title);
    rl.close();
});




