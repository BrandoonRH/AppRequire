const { boolean } = require('yargs');
const colors = require('colors');
const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Toma la base de la tabla de multiplicar',
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        default: 10,
                        describe: 'Numero limite de multiplicaciones',
                    })
                    .option('l', {
                        alias: 'list',
                        type: 'boolean',
                        default: false,
                        describe: 'Option para listar en consola el resultado',
                    })
                    .check((argv, options) => {
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un número'
                        }
                        return true;
                    })
                    .argv;
module.exports = argv; 