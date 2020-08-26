const db = require('../database');

class Cities {
    static retrieveAll (callback) {
        db.query('SELECT city_name from cities', function (err, res){
            if (err.error)
                return callback(err, null);
            callback(null, res);
        });
    }

    static insert (city, callback) {
        db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], function (err, res){
            if (err.error)
                return callback(err, null);
            callback(null, res);
        })
    }
}

module.exports = Cities;