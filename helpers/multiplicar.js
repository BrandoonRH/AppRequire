const fs = require('fs');
const colors = require('colors');
const createFile = async (base = 5, lista = false, hasta = 10) => {

    try {
        
        let salida, consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.green} ${base * i}\n`;
           
        }

        if(lista){
            console.log('================'.green);
            console.log(' Tabla del:'.gray, colors.red(base)); 
            console.log('================'.green);

            console.log(consola);
        }
    
    fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFile
}