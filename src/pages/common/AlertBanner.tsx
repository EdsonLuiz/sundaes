import { Alert } from "react-bootstrap"

export function AlertBanner({message, variant}) {
  const alertMessage = message || 'An unexpected error ocurred. Please try again latter.'
  const alertVariant = variant || 'danger'

  return (
    <Alert variant={alertVariant} style={{backgroundColor: 'red'}}>
      {alertMessage}
    </Alert>
  )
}