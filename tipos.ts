//=== TIPOS EM TYPESCRIPT ===

//Tipos  primitivos
let texto: String = 'Olá, mundo';
let numero: number = 42;
let verdadeito: boolean = true;
let teste: ["Hector", 18];

//Array
let numeros: number[] = [1,2,3];
let palavras: Array<string> = ["TypeScript", "é", "masssa"];

//Tuplas Imutavel fixo
let pessoa: [string, number] = ["Camila", 28]

//Enum -- enunciado
enum Cores{
    Verde,
    Azul,
    Rosa
}

let corfavorita: Cores = Cores.Azul;

//Any (evitar sempre que possivel)
let dadoAleatorio: any = 'text';
dadoAleatorio = 'texto';
dadoAleatorio = true;

//Unknown (tipo mais seguro que any)
let dadoDesconhecido: unknown = 10;
typeof dadoDesconhecido;

//Void
function mostrarAlerta() : void{
    console.log("Atenção preste atenção na aula");
}

//Null e undefined
let nada: null = null;
let Indefinido: undefined = undefined;

//never (usad quando a funçao nunca retorna)
function erroFatal(mensagem: String) : never{
    throw new Error(mensagem)
}

//Aliases
type usuario = {
nome:string;
idade:number;
}

let usuario1: usuario = {nome:"junin", idade: 32}