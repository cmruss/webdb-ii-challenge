const db = require('../data/db-config');

module.exports = {
    get,
    insert
}

function get(id) {
    let query = db('cars');

    if (id) {
        return query
            .where('id', id)
            .first()
    } else {
        return null;
    };
};

function insert(car){
    return db('cars')
        .insert(car)
        .then(([id]) => this.get(id));
};