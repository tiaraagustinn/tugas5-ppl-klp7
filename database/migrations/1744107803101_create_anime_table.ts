import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'animes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('genre').notNullable()
      table.integer('tahun')
      table.string('studio')
      table.float('score')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}