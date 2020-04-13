//Exercicio de nota escolar
//obter a media a partir de um array.

//0-59: E
//60 - 69:D
//70 - 79: C
//80 - 89: B
//90 - 100: A

const array = [69,69,59];
//75
console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas);
    
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
        return 'A'

}
function calcularMedia(array){
        let soma = 0;
            for(let valor of array){
                soma += valor;
            }
            return media = soma/(array.length);
}