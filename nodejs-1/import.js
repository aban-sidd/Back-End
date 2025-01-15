const path = require('path');

const index = require('./index.js')
const {add , multiply , subtract} = require('./index')

console.log( 'divide', index.divide(2,3))

console.log('add' ,add(2,3))

console.log('multiply' , multiply(2,2))

console.log('subtract' ,subtract(4,2))

console.log(path.isAbsolute('./index.js'))
console.log(path.extname('./import.js'))

const p1 = path.dirname('check/join/first')
const p2 = path.dirname('second/path/hello')
const join = path.join(p1,p2)

console.log(join)

module.exports = {
    name : 'Aban Siddiqui',
    age : '26',
    city: 'karachi'
}