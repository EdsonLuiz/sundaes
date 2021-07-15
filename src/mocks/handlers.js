import { rest } from 'msw'

const URL = `http://localhost:3030/`
export const handlers = [
  rest.get(`${URL}scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imgPath: '/images/chocolate.png' },
        { name: 'Vanilla', imgPath: '/images/vanilla.png' }
      ])
    )
  }),

  rest.get(`${URL}toppings`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Cherries', imagePath: '/images/cherries.png' },
        { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
        { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' }
      ])
    )
  })
]
