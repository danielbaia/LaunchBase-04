//Criando objetos
// Adicionado todas dentro de vetores



const alunos =[
  {
    nome: 'Daniel',
    nota : 9.5
  },
  {
    nome: 'Adriana',
    nota : 9.9
  },
  {
    nome: 'Ary',
    nota : 9.5
  },
  {
    nome: 'Danielson',
    nota : 10
  }
];
  
//Imprimir 4 aluno da lista  
console.log(alunos[3]);

//Imprimir nome do segundo aluno
console.log(alunos[1].nome);


//Imprimir média de todos os alunos
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota) / 4 ;
console.log(`A média dos alunos e de ${media}`);


