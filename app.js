
const {createFile} = require('./helpers/multiplicar.js'); 
const argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();

//console.log(argv);
//console.log('base: yargs', argv.base); 

/*const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('='); */

//const base = 5; 


createFile(argv.b, argv.l, argv.h)      
.then(nameFile => console.log(nameFile.rainbow, 'Creado'))
.catch(error => console.log(error));