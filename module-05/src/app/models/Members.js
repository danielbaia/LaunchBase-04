const db = require('../../config/db');
const { date } = require('../../lib/utils');


module.exports = {

    all(callback) {

        db.query(`Select * FROM members ORDER by id ASC`, function(err, results) {
            if (err) throw `Database error...${err}`;

            callback(results.rows);
        })

    },

    create(data, callback) {
        const query = `
            INSERT INTO members (
                avatar_url,
                name,
                email,
                birth,
                gender,
                blood,
                weight,
                height,
                instructor_id,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING id
        `;

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.gender,
            data.blood,
            data.weight,
            data.height,
            data.instructor,
            date(Date.now()).iso
        ];

        db.query(query, values, function(err, results) {
            if (err) throw `Database error...${err}`;

            callback(results.rows[0]);
        });

    },

    find(id, callback) {

        const query = `
            SELECT members.*, instructors.name as instructor_name
            FROM members
            JOIN instructors on (members.instructor_id = instructors.id)
            WHERE members.id = $1
        `;

        db.query(query, [id], function(err, results) {
            if (err) throw `Database error...${err}`;

            callback(results.rows[0]);
        })

    },

    update(data, callback) {

        const query = `
            UPDATE members
            SET 
            avatar_url = ($1),
            name = ($2),
            email = ($3),
            birth = ($4),
            gender = ($5),
            blood = ($6),
            weight = ($7),
            height = ($8),
            instructor_id = ($9)
            WHERE id = ($10)
        `;

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.gender,
            data.blood,
            data.weight,
            data.height,
            data.instructor,
            data.id
        ];


        db.query(query, values, function(err, results) {
            if (err) throw `Database error...${err}`;
            callback();
        });

    },

    delete(id, callback) {

        db.query(`DELETE FROM members WHERE id = ($1)`, [id], function(err, results) {
            if (err) throw `Database error...${err}`;

            callback();
        });

    },

    optionsInstructor(callback) {
        db.query(`Select id, name From instructors`, function(err, results) {
            if (err) throw `Database error...${err}`;

            callback(results.rows);

        });
    }
}