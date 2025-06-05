// === Array e Metodos de Manipulação ===

let notas: number[] = {6, 7.5, 8, 5};

//forEach - realiza a iteração de coleções como arrays ou listas;
notas.forEach(n => console.log ('Nota', n));

//map - Cria um novo Array com os resultados da chamada de uma função forncecida
let notasAjustadas = notas.map(n => n + 0.5);

//filter - filtra os valores do array com base em uma condição fornecida
let aprovados = notas.filter(m => n >= 6);

//push e pop
notas.push(10); //Adiciona um elemento no final do Array
notas.pop(); //remover um elemento do final do array
