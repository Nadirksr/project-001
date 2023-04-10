#!usr/bin/env-node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";

let sleep =()=>{
    return new Promise((res,) => {
     setTimeout(res,3000);   
    })
}

async function welcome() {
   let rainbow = chalkAnimation.rainbow('lets start the calculation');
   await sleep();
    rainbow.stop();

}
await welcome();

async function askInput() {
    let answers = await inquirer
    .prompt([
        {
            type : "list",
            name : "Operator",
            message : "which operation you want to perform",
            choices : ["+ Addition","- Subtraction","* Multiplication","/ Division"]
        },
        {
            type : "number",
            name : "num1",
            message : "Enter your 1st number:"
        },
        {
            type : "number",
            name : "num2",
            message : "Enter your 2nd number:"
        }
    ]);
    if ( answers.Operator == "+ Addition"){
        console.log(chalk.blue(`${answers.num1} + ${answers.num2} == ${answers.num1+answers.num2}`));
    }
        else if( answers.Operator == "- Subtraction"){
            console.log(chalk.green (`${answers.num1} - ${answers.num2} == ${answers.num1-answers.num2}`));
        }
            else if ( answers.Operator == "* Multiplication"){

                console.log(chalk.blue(`${answers.num1} * ${answers.num2} == ${answers.num1*answers.num2}`));
            }
                if ( answers.Operator == "/ Division"){
                    console.log(chalk.blue(`${answers.num1} / ${answers.num2} == ${answers.num1/answers.num2}`));
                }
    };
    // askInput();
     
    async function startAgain(){
        do{
            await askInput();
            var again = await inquirer
            .prompt({
        
        type : "input",
        name : "restart",
        message : "Do you want to restart? if yes type 'y' otherwise type 'n' ",
            })
        }while(again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart== "YES" || again.restart== "Yes")


    }
    
    startAgain();
    


    



