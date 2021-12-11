// A notação ponto pode ser utilizada para acessar propriedade e funções
// Tanto de funções da api JS como funções criadas por nós
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'João'; // no ES propriedades de obejtos podem ser criadas dinamicamente
// obj1['nome'] = 'Pedro';  Outra forma de acessar// definir propriedades é através da notação de colchetes.

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');
    }
    
}

const obj2 = new Obj('Joaquim');
const obj3 = new Obj('Maria');
console.log(obj2.nome);
console.log(obj3.nome);
obj2.exec();
obj3.exec();