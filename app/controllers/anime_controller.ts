import type { HttpContext } from '@adonisjs/core/http'
import Anime from '#models/anime'
import { schema, rules } from '@adonisjs/validator'

export default class AnimeController {
  /**
   * Display a list of resource
   */
   // Get all animes
  async index({ response }: HttpContext) {
    const animes = await Anime.all()
    return response.json({ data: animes })
  }

  /**
   * Handle form submission for the create action
   */
  // Create new anime
  async store({ request, response }: HttpContext) {
    const animeSchema = schema.create({
      title: schema.string([
        rules.required()
      ]),
      genre: schema.string([
        rules.required()
      ]),
      tahun: schema.number(),
      studio: schema.string.optional(),
      score: schema.number.optional()
    })

    try {
      // Validate request
      const data = await request.validate({ schema: animeSchema })
      
      // Create anime
      const anime = await Anime.create(data)
      
      return response.status(201).json({
        message: 'Anime created successfully',
        data: anime
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Failed to create anime',
        errors: error.messages || error
      })
    }
  }

  /**
   * Show individual record
   */
  // Get one anime by ID
  async show({ params, response }: HttpContext) {
    try {
      const anime = await Anime.findOrFail(params.id)
      return response.json({ data: anime })
    } catch (error) {
      return response.status(404).json({
        message: 'Anime not found'
      })
    }
  }

  /**
   * Handle form submission for the edit action
   */
  // Update anime
  async update({ params, request, response }: HttpContext) {
    // Validation schema
    const animeSchema = schema.create({
      title: schema.string.optional([
        rules.required()
      ]),
      genre: schema.string.optional([
        rules.required()
      ]),
      tahun: schema.number.optional(),
      studio: schema.string.optional(),
      score: schema.number.optional()
    })

    try {
      // Find anime
      const anime = await Anime.findOrFail(params.id)
      
      // Validate request
      const data = await request.validate({ schema: animeSchema })
      
      // Update anime
      anime.merge(data)
      await anime.save()
      
      return response.json({
        message: 'Anime updated successfully',
        data: anime
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Failed to update anime',
        errors: error.messages || error
      })
    }
  }

  /**
   * Delete record
   */
  // Hapus anime
  async destroy({ params, response }: HttpContext) {
    try {
      const anime = await Anime.findOrFail(params.id)
      await anime.delete()
      
      return response.json({
        message: 'Anime deleted successfully'
      })
    } catch (error) {
      return response.status(404).json({
        message: 'Anime not found'
      })
    }
  }
  
}

