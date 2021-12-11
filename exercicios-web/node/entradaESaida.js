/**
 * No JS existem alguns objetos que podem ser acessados de forma global,
 * entre eles está o __dirname e o global
 * Outro objeto global bastante conhecido é o process
 */

 const anonimo = process.argv.indexOf('-a') !== -1

 if(anonimo){
     process.stdout.write('Fala anônimo!\n')
     process.exit()
 }else{
     process.stdout.write('Escreva seu nome: ')
     process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n', '')
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
     })
 }