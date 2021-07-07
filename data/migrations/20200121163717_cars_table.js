
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {

        tbl.increments();

        tbl.string('vin', 17).unique();

        tbl.string('make').index();

        tbl.string('model').index();

        tbl.integer('mileage');

        tbl.integer('year');

        tbl.boolean('automatic').defaultTo(true);

        tbl.string('title');

    });
};

exports.down = function(knex) {

  return knex.schema.dropTableIfExists('cars');
  
};
