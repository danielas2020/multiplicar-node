/* REQUIRE */

const fs = require('fs');

let data = '';

let obtenerArchivo = (base, limite) => {

    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`El valor '${base}' no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }
        
        fs.writeFile(`tablas/tabla - ${base} - al ${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`El archivo de tabla - ${base} - al ${limite} a sido guardado!`);
        });
    })

}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject(`El valor '${base}' no es un número`);
            return;
        }

        if(!Number(limite)){
            reject(`El valor '${limite}' no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        resolve(data)


    })
}

module.exports = {
    obtenerArchivo,
    listarTabla
}