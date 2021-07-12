# Getting Started with Create React App

# Notes

## Simulate user actions
  [testing-library user-vent](https://github.com/testing-library/user-event)

## screen Query methods.

*`command`* [All] By`QueryType`
- *command* 
  - *`get`*: expect element to be in the DOM
  - *`query`*: expect element not to be in the DOM
  - *`find`*: expect element to appear in the DOM

- [All]
  - (exclude) expect only one match
  - (includ) expect more than one match

- QueryType
  - *`Role`*: most prefered
  - *`AltText`*: images
  - *`Text`*: diplay elements
  - Form Elements 
    - *`PlaceholderText`*: 
    - *`LabelText`*: 
    - *`DisplayValue`*: 

## Not wrapped in act(...) **`warning`**
- React update element after test was finished.
- Don't want to follow the advice to wrap in act(...)
  - Testing library already does this for us!
    [see more](https://testing-library.com/docs/preact-testing-library/api/#act)
- Remedy this error:
  - Determine what changes after the test is over(async).
  - Account for this change in test by:
    - awaiting the change, and
    - asserting on it
    - [More info](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)

[Appearance and Disappearance](https://testing-library.com/docs/guide-disappearance): 
  ```js
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  )
  ```
`waitForElementToBeRemoved` is an assertion on its own.

# Mock Service Worker
- Intercept network calls.
- return specified responses.
- Prevents network calls during the tests.
- Set up test conditions using server responses.

## Installation

```shell
yarn add msw
```

- **Create handlers**: functions that determine what is returned for a specific URL.
- **Create test server**: this handle requests.
- **Make sure test server listen during all tests.**
  - Reset the server after each test.

## Configuration
1. Create a file `src/mocks/handlers.js` for handler.
```js
import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imgPath: '/images/chocolate.png' },
        { name: 'Vanilla', imgPath: '/images/vanilla.png' }
      ])
    )
  })
]
```

2. Create a file `src/mocks/server.js` for server.
```js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```