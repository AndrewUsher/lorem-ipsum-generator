import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../styles/Output'
import { PulseLoader } from 'react-spinners'

const Output = props => {
  let output = ''
  if (props.text === '') {
    output = <PulseLoader size={30} color="#f3e" style={{ margin: '20px' }} />
  } else {
    output = props.text
  }

  return <Container>{output}</Container>
}

Output.propTypes = {
  text: PropTypes.string
}

export default Output
