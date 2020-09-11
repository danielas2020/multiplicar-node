
const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', opciones).
            command('crear', 'Crear una archivo de tabla de multiplicar', opciones).argv;

module.exports = {
    argv
}