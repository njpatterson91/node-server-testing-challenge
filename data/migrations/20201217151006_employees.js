exports.up = function (knex) {
  return knex.schema
    .createTable("employees", (table) => {
      table.increments();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("employee_title").notNullable();
      table.string("employee_unit").notNullable();
      table.string("employee_email").notNullable().unique();
      table.string("employee_phone").notNullable().unique();
      table.string("employee_pay_rate").notNullable();
    })
    .createTable("clients", (table) => {
      table.increments();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("client_email").notNullable().unique();
      table.string("client_phone").notNullable().unique();
    })
    .createTable("jobs", (table) => {
      table.increments();
      table.string("job_name").notNullable().unique();
      table.string("job_location").notNullable();
      table.string("job_budget").notNullable();
      table.string("job_deadline").notNullable();
      table
        .integer("client_id")
        .unsigned()
        .references("id")
        .inTable("clients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("employee_units", (table) => {
      table.increments();
      table.string("unit_name").notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("employees")
    .dropTableIfExists("clients")
    .dropTableIfExists("jobs")
    .dropTableIfExists("employee_units");
};
