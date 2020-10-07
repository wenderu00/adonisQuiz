'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuizSchema extends Schema {
  up () {
    this.create('quizzes', (table) => {
      table.increments()
      table.string('title',80).notNullable()
      table.string('description',500).notNullable()
      table.json('questions')
      table.integer('createdBy').unsigned().notNullable()
      table.foreign('createdBy').references('id').inTable('users')
  
      table.timestamps()
    })
  }

  down () {
    this.drop('quizzes')
  }
}

module.exports = QuizSchema
