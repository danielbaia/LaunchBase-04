const fs = require('fs');
const data = require('../data.json');
const { age, date } = require('../utils');


exports.index = function(req, res) {

    return res.render("instructors/index", { instructors: data.instructors });
}

exports.create = function(req, res) {
    return res.render('instructors/create');
}

exports.post = function(req, res) {

    //req.body
    //verificar se todos os campos foram preenchidos
    const keys = Object.keys(req.body);

    for (const key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill all the fields!");
    }

    let id = 1;
    const lastInstructor = data.instructors[data.instructors.length - 1];
    if (lastInstructor) {
        id = lastInstructor.id + 1;
    }


    let { avatar_url, name, birth, gender, services } = req.body;

    //convertendo a data de aniversario
    birth = Date.parse(req.body.birth);
    //recuperando a data de criacao o cadastro
    const created_at = Date.now();


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

exports.edit = function(req, res) {

    const { id } = req.params;

    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id;
    });

    if (!foundInstructor) return res.send('Instructor not found!');

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso
    }

    return res.render('instructors/edit', { instructor });
}

exports.put = function(req, res) {

    const { id } = req.body;
    let index = 0;

    const foundInstructor = data.instructors.find(function(instructor, foundIndex) {

        if (id == instructor.id) {
            index = foundIndex;
            return true;
        }
    })

    const instructor = {
        ...foundInstructor,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    };

    data.instructors[index] = instructor;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error...")

        return res.redirect(`/instructors/${id}`);
    });

}

exports.delete = function(req, res) {

    const { id } = req.body;

    const filteredInstructor = data.instructors.filter(function(instructor) {
        return id != instructor.id;
    })

    data.instructors = filteredInstructor;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("Write file error...")
        }

        return res.redirect(`/instructors`);
    });

}