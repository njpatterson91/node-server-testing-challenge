exports.up = function (knex) {
  return knex.schema.createTable("employees", (table) => {
    table.increments();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("employee_title").notNullable();
    table.string("employee_unit").notNullable();
    table.string("employee_email").notNullable();
    table.string("employee_phone").notNullable();
    table.string("employee_pay_rate").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("employees");
};
