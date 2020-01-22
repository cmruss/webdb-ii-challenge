const db = require('../data/db-config');

module.exports = {
    get,
    insert,
    update,
    remove
};

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

function update(id, content) {
    return db('cars')
        .where('id', id)
        .update(content)
        .then(count => (count > 0 ? this.get(id) : null));
};

function remove(id) {
    return db('cars')
        .where('id', id)
        .del();
};