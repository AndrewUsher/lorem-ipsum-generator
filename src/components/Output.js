import React from 'react'
import { PulseLoader } from 'react-spinners'

const Output = props => {
  let output = ''
  if (props.text === '') {
    output = <PulseLoader size={30} color="#f3e" style={{ margin: '20px' }} />
  } else {
    output = props.text
  }

  return <div>{output}</div>
}

export default Output
