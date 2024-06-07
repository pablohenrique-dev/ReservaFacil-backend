/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const exists = await knex.schema.hasTable("hospedes");
  if (!exists) {
    return await knex.schema.createTable("hospedes", (table) => {
      table.increments("id").primary();
      table.string("nome").notNullable();
      table.string("endereco").notNullable();
      table.string("telefone").notNullable();
      table.string("email").unique().notNullable();
      table.timestamps(true, true);
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("hospedes");
};
