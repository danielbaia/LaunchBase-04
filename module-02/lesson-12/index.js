const classA = [
  {
    name: 'Daniel',
    grade: 3,
  },
  {
    name: 'Adriana',
    grade: 4.9
  },
  {
    name: 'Ary',
    grade: 9.5
  },
  {
    name: 'Danielson',
    grade: 10
  }
];

const classB = [
  {
    name: 'Pedro',
    grade: 3.5
  },
  {
    name: 'Ana',
    grade: 7.9
  },
  {
    name: 'Joao',
    grade: 5.5
  },
  {
    name: 'Maria',
    grade: 10
  },
  {
    name: 'Silva',
    grade: 10
  },
  {
    name: 'Sousa',
    grade: 10
  },
  {
    name: 'Antonio',
    grade: 2
  }
];


function setFlunked(student) {
  student.flunked = false

  if (student.grade < 5) {
    student.flunked = true
  }

}

function sendMessageFlunked(student) {
  if (student.flunked) {
    console.log(`The ${student.name} flunked!`)
  }

}

function studentsFlunkeds(students) {
  for (const student of students) {
    setFlunked(student)
    sendMessageFlunked(student)
  }
}


studentsFlunkeds(classA)
studentsFlunkeds(classB)




