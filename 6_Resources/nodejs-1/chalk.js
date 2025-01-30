const chalk = require('chalk')

const {name , age , city} = require('./import')

console.log(chalk.bold.red(name))
console.log(chalk.green(age))
console.log(chalk.bold.blue(city))

