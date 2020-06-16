const Members = require('../models/Members');
const { age, date } = require('../../lib/utils');

module.exports = {
    index(req, res) {

        Members.all(function(members) {
            return res.render("members/index", { members });
        })

    },
    create(req, res) {

        Members.optionsInstructor(function(options) {

            return res.render("members/create", { instructorOptions: options });
        })

    },
    post(req, res) {


        const keys = Object.keys(req.body);

        for (const key of keys) {
            if (req.body[key] == "") {
                return res.render("Please, fill all the fields");
            }
        }

        Members.create(req.body, function(member) {
            return res.redirect(`members/${member.id}`);
        })

    },
    show(req, res) {
        Members.find(req.params.id, function(member) {

            if (!member) res.send("Member not found...");

            member.birth = date(member.birth).format;
            member.created_at = date(member.created_at).format;

            res.render(`members/show`, { member });
        })

    },
    edit(req, res) {

        Members.find(req.params.id, function(member) {

            if (!member) res.send("Member not found...");

            member.birth = date(member.birth).iso;
            member.created_at = date(member.created_at).format;

            Members.optionsInstructor(function(options) {

                return res.render("members/edit", { member, instructorOptions: options });
            })

        })

    },

    put(req, res) {


        const keys = Object.keys(req.body);

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Please, fill all the fields!");
        }

        Members.update(req.body, function() {
            res.redirect(`members/${req.body.id}`);
        })

    },

    delete(req, res) {

        Members.delete(req.body.id, function() {
            res.redirect(`/members`)
        })
    }

}