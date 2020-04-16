//Usando Boolean

const TurmaA =[
  {
    nome: 'Daniel',
    nota : 3,
  },
  {
    nome: 'Adriana',
    nota : 4.9
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
    nota : 10
  },
  {
    nome: 'Silva',
    nota : 10
  },
  {
    nome: 'Sousa',
    nota : 10
  },
  {
    nome: 'Antonio',
    nota : 2
  }
];
  

//Verificar se aluno esta reprovado

  function marcarComoReprovado(aluno){
      aluno.reprovado = false;
      if(aluno.nota < 5){
        aluno.reprovado = true;
      }

  }

  function enviarMensagemReprovado(aluno){
    if(aluno.reprovado){
      console.log(`O ${aluno.nome} esta reprovado!`); 
    }

  }

  function alunoReprovado(alunos){
    for (const aluno of alunos) {
      marcarComoReprovado(aluno);
      enviarMensagemReprovado(aluno)
    }
  }


  alunoReprovado(TurmaA);
  alunoReprovado(TurmaB);
  



