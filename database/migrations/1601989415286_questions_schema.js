'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionsSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.integer('quizzes_id').unsigned().notNullable()
      table.foreign('quizzes_id').references('id').inTable('quizzes')
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionsSchema
