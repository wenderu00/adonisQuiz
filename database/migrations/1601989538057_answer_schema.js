'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.json('content')
      table.integer('quizzes_id').unsigned().notNullable()
      table.foreign('quizzes_id').references('id').inTable('quizzes')
      table.integer('createdBy').unsigned().notNullable()
      table.foreign('createdBy').references('id').inTable('users')
      table.integer('created_at').unsigned().notNullable()
      table.foreign('created_at').references('id').inTable('users')
      table.integer('updated_at').unsigned().notNullable()
      table.foreign('updated_at').references('id').inTable('users')
      
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
