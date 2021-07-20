import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../../../mocks/server'
import { OrderEntry } from '../OrderEntry'

test('handles error for scoops and toppings routes', async () => {
  const BASE_URL = 'http://localhost:3030/'
  server.resetHandlers(
    rest.get(`${BASE_URL}scoops`, (req, res, ctx) => res(ctx.status(500))),
    rest.get(`${BASE_URL}toppings`, (req, res, ctx) => res(ctx.status(500)))
  )

  render(<OrderEntry />)

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert')
    expect(alerts).toHaveLength(2)
  })
})
