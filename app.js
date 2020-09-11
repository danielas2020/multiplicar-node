//Require
const { obtenerArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then((resp)=> console.log(resp))
                                           .catch(err => console.log(err))
        break;
    case 'crear':
        obtenerArchivo(argv.base, argv.limite).then((resp)=>console.log(resp))
                  .catch(err => console.log(err))
        break
    default:
        break;
}

//let parametro = process.argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.limite);



