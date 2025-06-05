// == FUNÇÕES ===

//Função Tradicional
function saudacao(nome: string): string{
    return `Olá, ${nome}`
}
console.log(saudacao('Hector'))

//Arrow function
const soma = (x: number, y: number): number => x + y
console.log('soma:', soma(2,3))

//Dunção com valor padrão
function mensagem(texto: string = 'Bem Vindo(a)!'){
    console.log(texto);
}

//Função com paramentro opcional
function apresentar(nome?: string){
    if (nome){
        console.log(`Olám ${nome}`);
    }else{
        console.log('Olá, visitante.');
    }
}