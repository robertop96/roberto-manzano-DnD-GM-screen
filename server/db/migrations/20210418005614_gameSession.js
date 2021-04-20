exports.up = function (knex) {
  return knex.schema.createTable('gameSession', (table) => {
    table.increments('id').primary();
    table
      .integer('sheet_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('sheet')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('user')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('gameSession');
};
