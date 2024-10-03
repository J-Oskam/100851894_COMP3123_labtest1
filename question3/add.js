const fs = require('fs');
const path = require('path');
const process = require('process');

const logsDirectory = path.join(__dirname, 'logs'); //gets current directory/logs

try{ //create log directory if none exists 
    if(!fs.existsSync(logsDirectory)){
        fs.mkdirSync(logsDirectory);
    }
} catch(error){
    console.log(error);
} finally{
    process.chdir(logsDirectory); //switch to newly created logs directory
}

for(i=0;i<10;i++){
    const fileContent = `this is file ${i}`;
    fs.writeFileSync(`log${i}.txt`, fileContent, 'utf8');
    console.log(`log${i}.txt`);
}