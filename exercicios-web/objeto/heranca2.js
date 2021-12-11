//Cadeia de prototipos (chain prototype)

Object.prototype.attri0 = '0'
const avo = {attri1: 'A'}
const pai = {__proto__: avo, attri2: 'B', attri3: '3'}
const filho ={ __proto__: pai, attri3: 'C'} //Quando um objeto "esconde" uma propriedade de seu prototipo, chamamos de sombreamento
console.log(filho.attri0, filho.attri1, filho.attri2, filho.attri3) //ou shadowing

const carro ={
    velocidadeAtual: 0,
    velocidadeMax: 200,
    acelerar(delta){
        if(this.velocidadeAtual + delta > this.velocidadeMax){
            this.velocidadeAtual = this.velocidadeMax
        }else{
            this.velocidadeAtual += delta
        }

    },

    status(){
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMax}Km/h`
    }


}

const ferrari ={
    modelo: 'F40',
    velocidadeMax: 340
}

const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //A palavra reservada super se refere ao prototipo do objeto
    }
}

// Outra forma de definirmos qual será o prototipo de um objeto é através do método setPrototypeOf
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari, volvo) // Por padrão o toString de um objeto só retorna as propriedades locais do objeto e     
                            // não as propriedades de seu prototipo
ferrari.acelerar(300)
console.log(ferrari.status())
volvo.acelerar(300)
console.log(volvo.status())