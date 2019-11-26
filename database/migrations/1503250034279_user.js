"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("nome", 80).notNullable();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("senha", 60).notNullable();
      table.date("data_nascimento", 60).notNullable();
      table
        .string("cpf", 11)
        .notNullable()
        .unique();
      table
        .string("nick", 20)
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
