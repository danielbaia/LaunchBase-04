const Instructors = require('../models/Instructors');
const { age, date } = require('../../lib/utils');

module.exports = {
    index(req, res) {

        Instructors.all(function(instructors) {
            return res.render("instructors/index", { instructors });
        })

    },
    create(req, res) {
        return res.render("instructors/create");

    },
    post(req, res) {


        const keys = Object.keys(req.body);

        for (const key of keys) {
            if (req.body[key] == "") {
                return res.render("Please, fill all the fields");
            }
        }

        Instructors.create(req.body, function(instructor) {
            return res.redirect(`instructors/${instructor.id}`);
        })

    },
    show(req, res) {
        Instructors.find(req.params.id, function(instructor) {

            if (!instructor) res.send("Instructor not found...");

            instructor.age = age(instructor.birth);
            instructor.services = instructor.services.split(",");
            instructor.created_at = date(instructor.created_at).format;

            res.render(`instructors/show`, { instructor });
        })

    },
    edit(req, res) {

        Instructors.find(req.params.id, function(instructor) {

            if (!instructor) res.send("Instructor not found...");

            instructor.birth = date(instructor.birth).iso;
            instructor.services = instructor.services.split(",");
            instructor.created_at = date(instructor.created_at).format;

            res.render(`instructors/edit`, { instructor });
        })

    },

    put(req, res) {


        const keys = Object.keys(req.body);

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Please, fill all the fields!");
        }

        Instructors.update(req.body, function() {
            res.redirect(`instructors/${req.body.id}`);
        })

    },

    delete(req, res) {

        Instructors.delete(req.body.id, function() {
            res.redirect(`/instructors`)
        })
    }

}