const fs = require('fs');
const data = require('../data.json');
const { age, date } = require('../utils');


exports.index = function(req, res) {
    return res.render("members/index", { members: data.members });
}

exports.create = function(req, res) {
    return res.render('members/create');
}

exports.post = function(req, res) {

    //req.body
    //verificar se todos os campos foram preenchidos
    const keys = Object.keys(req.body);

    for (const key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill all the fields!");
    }

    //convertendo a data de aniversario
    birth = Date.parse(req.body.birth);

    const lastMember = data.members[data.members.length - 1];

    const id = 1;

    if (lastMember) {
        id = Number(lastMember.id + 1);
    }


    data.members.push({
        ...req.body,
        birth,
        id
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("Write file error!");
        }
        return res.redirect('/members');
    });

    //return res.send(req.body);
}

exports.show = function(req, res) {

    //req.params

    const { id } = req.params;

    const foundMember = data.members.find(function(member) {
        return member.id == id;
    });


    if (!foundMember) return res.send('Member not found!');


    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthDay,
        gender: foundMember.gender == "M" ? "Masculino" : "Feminino"
    }

    return res.render('members/show', { member });

}

exports.edit = function(req, res) {

    const { id } = req.params;

    const foundMember = data.members.find(function(member) {
        return member.id == id;
    });

    if (!foundMember) return res.send('Member not found!');

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).iso
    }

    return res.render('members/edit', { member });
}

exports.put = function(req, res) {

    const { id } = req.body;
    let index = 0;

    const foundMember = data.members.find(function(member, foundIndex) {

        if (id == member.id) {
            index = foundIndex;
            return true;
        }
    })

    const member = {
        ...foundMember,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    };

    data.members[index] = member;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error...")

        return res.redirect(`/members/${id}`);
    });

}

exports.delete = function(req, res) {

    const { id } = req.body;

    const filteredMember = data.members.filter(function(member) {
        return id != member.id;
    })

    data.members = filteredMember;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("Write file error...")
        }

        return res.redirect(`/members`);
    });

}