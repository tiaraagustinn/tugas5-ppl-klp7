/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AnimeController = () => import('#controllers/anime_controller')

// Basic routes (required)
router.get('/animes', [AnimeController, 'index'])
router.get('/animes/:id', [AnimeController, 'show'])
router.post('/animes', [AnimeController, 'store'])

// Bonus routes
router.put('/animes/:id', [AnimeController, 'update'])
router.delete('/animes/:id', [AnimeController, 'destroy'])

// Root route
router.get('/', async ({ response }) => {
  return response.json({
    message: 'Welcome to Anime API',
    endpoints: {
      get_all: 'GET /animes',
      get_one: 'GET /animes/:id',
      create: 'POST /animes',
      update: 'PUT /animes/:id',
      delete: 'DELETE /animes/:id'
    }
  })
})
