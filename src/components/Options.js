import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input, Select, Button } from '../styles/Options'

const Options = props => {
  return (
    <Container>
      <form onSubmit={props.submit}>
        <Input type="number" id="paras" onChange={props.changedNum} value={props.num} />
        <Select onChange={props.changedType} value={props.type}>
          <option value="para">Paragraphs</option>
          <option value="link">Links</option>
          <option value="ol">Ordered list</option>
          <option value="ul">Unordered list</option>
          <option value="dl">Description List</option>
          <option value="plaintext">Plain Text</option>
        </Select>
        <Select onChange={props.changedLength} id="length" value={props.length}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="verylong">Very Long</option>
        </Select>

        <Button type="submit">Get Text</Button>
      </form>
    </Container>
  )
}

export default Options
