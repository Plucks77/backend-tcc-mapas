"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EventosSchema extends Schema {
  up() {
    this.create("evento", table => {
      table.increments();
      table
        .integer("id_criador")
        .unsigned()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE");
      table.string("nome", 80).notNullable();
      table.string("descricao", 150).notNullable();
      table.datetime("data").notNullable();
      table
        .boolean("privado")
        .notNullable()
        .defaultTo(false);
      table.float("valor").nullable();
      table.integer("max_participantes").notNullable();
      table.string("latitude", 80).notNullable();
      table.string("longitude", 80).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("evento");
  }
}

module.exports = EventosSchema;
