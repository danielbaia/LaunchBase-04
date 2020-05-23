const fs = require('fs');
const data = require('./data');
const { age, date } = require('./utils');

//EDIT
exports.edit = function(req, res) {

    const { id } = req.params;

    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id;
    });

    if (!foundInstructor) return res.send('Instructor not found!');

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    return res.render('instructors/edit', { instructor });
}



//SHOW
exports.show = function(req, res) {

    //req.params

    const { id } = req.params;

    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id;
    });


    if (!foundInstructor) return res.send('Instructor not found!');


    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        gender: foundInstructor.gender == "M" ? "Masculino" : "Feminino",
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
    }


    return res.render('instructors/show', { instructor });

}



//CREATE
exports.post = function(req, res) {

    //req.body
    //verificar se todos os campos foram preenchidos
    const keys = Object.keys(req.body);

    for (const key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill all the fields!");
    }

    let { avatar_url, name, birth, gender, services } = req.body;

    //convertendo a data de aniversario
    birth = Date.parse(req.body.birth);
    //recuperando a data de criacao o cadastro
    const created_at = Date.now();
    const id = Number(data.instructors.length + 1);


    data.instructors.push({
        id,
        name,
        avatar_url,
        birth,
        gender,
        services,
        created_at,
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("Write file error!");
        }
        return res.redirect('/instructors');
    });

    //return res.send(req.body);
}