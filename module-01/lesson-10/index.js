
//Usando Funcoes e Metodos

const TurmaA =[
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

const TurmaB =[
  {
    nome: 'Pedro',
    nota : 3.5
  },
  {
    nome: 'Ana',
    nota : 7.9
  },
  {
    nome: 'Joao',
    nota : 5.5
  },
  {
    nome: 'Maria',
    nota : 2
  },
  {
    nome: 'Silva',
    nota : 2
  },
  {
    nome: 'Sousa',
    nota : 2
  },
  {
    nome: 'Antonio',
    nota : 2
  }
];
  

//Funcao para calcular a media

function calculaMedia(turma){
  let soma = 0 ;
  for(let i = 0; i < turma.length; i++){
    soma = soma + turma[i].nota;
  }

  const media = soma / turma.length;
  return media;

};

function enviamsg(media, turma){

  if(media > 5)
    return console.log(`Parabéns, a média da ${turma} foi de ${media}.`);
  else{
    return console.log(`A média da ${turma} foi abaixo de ${media}.`);
  }
}


//
const mediaA = calculaMedia(TurmaA);
const mediaB = calculaMedia(TurmaB);

enviamsg(mediaA, "Turma A");
enviamsg(mediaB, "Turma B")



