import { useEffect, useState } from 'react'
import axios from 'axios'
import { ScoopOptions } from './ScoopOption'
import { Row } from 'react-bootstrap'
import { ToppingOptions } from './ToppingOptions'
import { AlertBanner } from '../common/AlertBanner'

export function Options({ optionType }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true))
  }, [optionType, setItems])

  if (error) {
    return <AlertBanner />
  }

  const ItemComponent = Object.is(optionType, 'scoops')
    ? ScoopOptions
    : ToppingOptions

  const optionItems = items.map((eachItem) => (
    <ItemComponent
      key={eachItem.name}
      name={eachItem.name}
      imagePath={eachItem.imagePath}
    />
  ))

  return <Row>{optionItems}</Row>
}
