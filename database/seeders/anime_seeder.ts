import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Anime from '#models/anime'

export default class extends BaseSeeder {
  async run() {
    await Anime.createMany([
      {
          "title": "Shingeki no Kyoujin",
          "genre": "Action",
          "tahun": 2013,
          "studio": "Wit Studio",
          "score": 8.56
      },
      {
          "title": "Haikyuu",
          "genre": "Sports",
          "tahun": 2014,
          "studio": "Production I.G",
          "score": 8.44
      },
      {
          "title": "Monster",
          "genre": "Mystery",
          "tahun": 2004,
          "studio": "Madhouse",
          "score": 8.88
      },
      {
          "title": "Ajin",
          "genre": "Action",
          "tahun": 2016,
          "studio": "Polygon Pictures",
          "score": 7.38
      },
      {
          "title": "Fullmental Alchemist",
          "genre": "Action",
          "tahun": 2009,
          "studio": "Bones",
          "score": 9.1
      },
      {
          "title": "Kusuriya no Hitorigoto",
          "genre": "Drama",
          "tahun": 2023,
          "studio": "TOHO Animation",
          "score": 8.88
      },
      {
          "title": "Made in Abyss",
          "genre": "Adventure",
          "tahun": 2017,
          "studio": "Kinema Citrus",
          "score": 8.64
      },
      {
          "title": "Btooom",
          "genre": "Action",
          "tahun": 2012,
          "studio": "Madhouse",
          "score": 7.27
      },
      {
          "title": "Vinland Saga",
          "genre": "Action",
          "tahun": 2019,
          "studio": "Wit Studio",
          "score": 8.76
      },
      {
          "title": "Zankyou no Terror",
          "genre": "Mystery",
          "tahun": 2014,
          "studio": "MAPPA",
          "score": 8.08
      },
      {
          "title": "Boku dake ga Inai Machi",
          "genre": "Mystery",
          "tahun": 2016,
          "studio": "A-1 Pictures",
          "score": 8.3
      }
    ])
  }
}