#!/usr/bin/env node

const Aboutme = require('./commands/Aboutme');
const Contactme = require('./commands/Contactme');
const inquirer = require('inquirer');


const index = () => {
   inquirer.prompt([{
       type: 'list',
       choices: ['aboutme', 'contactme'],
       name: 'answer'
   }]).then(({ answer }) => {
       console.log('response', answer);
       if (answer === 'aboutme') {
           Aboutme();
       } else if (answer === 'contactme') {
           Contactme();
       }
   });
};

index();

module.exports = index;
