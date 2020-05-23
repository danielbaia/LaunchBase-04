module.exports = {
    age: function(timestamp) {

        const today = new Date();
        const birthDate = new Date(timestamp);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        if (month == 0 || month < 0 && today.getUTCDate() < birthDate.getUTCDate()) {
            age = age - 1;
        }

        return age;
    },

    date: function(timestamp) {

        const birthDate = new Date(timestamp);

        const year = birthDate.getUTCFullYear();
        const month = `0${birthDate.getUTCMonth() + 1}`.slice(-2);
        const day = `0${birthDate.getUTCDate()}`.slice(-2);

        return `${year}-${month}-${day}`;
    }
}