exports.up = function (knex) {
  return knex.schema.createTable('profile', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('lastName').notNullable();
    table.string('dateOfBirth').notNullable();
    table.string('username').notNullable();
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
  return knex.schema.dropTable('profile');
};
