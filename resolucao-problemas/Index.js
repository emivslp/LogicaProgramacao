// variável, seu valor pode ser alterado no decorrer do programa
// let nomeEstudante = "Helena";
// console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
// const nomeDoEstudante = "Helena";
// console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
// String: nomeEstudante = "Helena";

let nomeEstudante = "Brisa";
console.log(nomeEstudante);

const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

// let listaDeEstudantes = ["Brisa","Calado","Mamute"];
// console.log(listaDeEstudantes);
// let quantidadeDeEstudantes = listaDeEstudantes.length;
// console.log(quantidadeDeEstudantes);

// for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
//     const alunoCorrente = listaDeEstudantes[indice];
//     console.log (alunoCorrente);
// }

// for (let numero = 1; numero <= 10; numero++){
//     console.log(numero);
// }

let listaDeEstudantes = ["Brisa", "Calado", "Mamute"];
let quantidadeDeEstudantes = listaDeEstudantes.length;

listaDeEstudantes.push("Camomila");
// console.log (listaDeEstudantes);

if (quantidadeDeEstudantes < 5 ) {
    listaDeEstudantes.push("PenaBranca");
    console.log(listaDeEstudantes);
} else {
    console.log("Não foi possível inserir mais alunos");
}
