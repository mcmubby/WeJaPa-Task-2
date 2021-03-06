const readline = require('readline');
const rl = readline.createInterface({ input : process.stdin, output : process.stdout});
const fs = require('fs');

//global variables
let vb =1;
const greetings = ["Enter Installation instruction: ", "Describe usage: ", "Contributors(use ',' to seperate): "];
const heading = ["Installation Instruction", "Usage", "Contributor(s)"];

//Create project file
rl.question("Project name? : ", (res)=>{
    fs.writeFile(`${res}.md`,`Project: ${res} has been created`, 
    (err)=>{
        if(err){
            console.log(err);
        }
    });
    testQ(res,vb);
});

testQ = (name,vb)=>{  
    rl.question(`${greetings[vb-1]}`, (inst)=>{
        fs.appendFile(`${name}.md`,`\n${heading[vb-1]}:\n --${inst}`, 
        (err)=>{
            if(err){
                console.log(err);
            }
        });
        vb++;
        if(vb<4){testQ(name,vb);}
        else{
            fs.appendFile(`${name}.md`,`\nCreated at: ${Date()}`, 
                (err)=>{
                    if(err){
                        console.log(err);
                    }
            });
            rl.close();
        }
    });  
}


rl.on("close", ()=>{
    console.log(`Documentation created successfully!!!`);
});