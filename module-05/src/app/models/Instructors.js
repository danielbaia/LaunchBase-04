const db = require('../../config/db');
const { date } = require('../../lib/utils');


module.exports = {

    all(callback) {

        db.query(`Select * FROM instructors ORDER by id ASC`, function(err, results) {
            if (err) throw `Database error...${err}`;

            callback(results.rows);
        })

    },

    create(data, callback) {
        const query = `
            INSERT INTO instructors (
                name,
                avatar_url,
                gender,
                birth,
                services,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `;

        const values = [
            data.name,
            data.avatar_url,
            data.gender,
            date(data.birth).iso,
            data.services,
            date(Date.now()).iso
        ];

        db.query(query, values, function(err, results) {
            if (err) throw `Database error...${err}`;

            callback(results.rows[0]);
        });

    },

    find(id, callback) {
        db.query(`SELECT * FROM instructors WHERE id = $1`, [id], function(err, results) {
            if (err) throw `Database error...${err}`;

            callback(results.rows[0]);
        })

    },

    update(data, callback) {

        const query = `
            UPDATE instructors
            SET 
            name = ($1),
            avatar_url = ($2),
            gender = ($3),
            birth = ($4),
            services = ($5)
            WHERE id = ($6)
        `;

        const values = [
            data.name,
            data.avatar_url,
            data.gender,
            date(data.birth).iso,
            data.services,
            data.id
        ];


        db.query(query, values, function(err, results) {
            if (err) throw `Database error...${err}`;
            callback();
        });

    },

    delete(id, callback) {

        db.query(`DELETE FROM instructors WHERE id = ($1)`, [id], function(err, results) {
            if (err) throw `Database error...${err}`;

            callback();
        });

    }
}