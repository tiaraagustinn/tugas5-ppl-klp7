import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Anime extends BaseModel {
  public static table = 'animes'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare genre: string
  
  @column()
  declare tahun: number

  @column()
  declare studio: string

  @column()
  declare score: number
}