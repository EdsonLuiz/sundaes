import { render, screen } from '@testing-library/react'
import { Options } from '../Options'

test('displays image for each scoop option from the server', async () => {
  render(<Options optionType="scoops" />)

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  // confirm alt text
  const altText = scoopImages.map((eachElement) => eachElement.alt)
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('displayes image for each toppings options from the server', async () => {
  render(<Options optionType="toppings" />)

  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i
  })
  expect(toppingImages).toHaveLength(3)

  const altText = toppingImages.map((eachElement) => eachElement.alt)
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping'
  ])
})
