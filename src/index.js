var uniqueRandomArray = require('unique-random-array');
var deptosConSusMunicipios = require('../data.json');

function departamentos(){
    return deptosConSusMunicipios.map(function (v,i,a) {
        return v.departamento;
    });
}

function pueblitos (targetDepto){
    return deptosConSusMunicipios.reduce(function (p,v,i,a) {
        if (v.departamento == targetDepto) {
            return v.ciudades;
        }
    }, []);
}

function cualquierPueblito (){
    var unDeptoCualquiera = uniqueRandomArray(deptosConSusMunicipios)();
    return uniqueRandomArray(unDeptoCualquiera.ciudades)();
}

module.exports = {
    departamentos : departamentos,
    pueblitos: pueblitos,
    cualquierPueblito: cualquierPueblito
};