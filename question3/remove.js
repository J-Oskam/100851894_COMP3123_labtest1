const fs = require('fs');
const path = require('path');
const process = require('process');

const logsDirectory = path.join(__dirname, 'logs');

fs.access(logsDirectory, (error) => {
    if(error){
        console.log('Directory not found');
    } else {
        for(i=0;i<10;i++){ //delete the log files individually
            const fileData = fs.readFileSync(`${logsDirectory}/log${i}.txt`,'utf-8');
            console.log(`deleting log${i}.txt`);
            fs.unlink(`question3/logs/log${i}.txt`, (err) => {
                if(err){
                    console.log(err);
                }
            })
        }

        
    }
})