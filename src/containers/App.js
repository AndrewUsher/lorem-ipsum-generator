import React, { Component } from 'react'
import { Container } from '../styles/App'
import axios from 'axios'
import Options from '../components/Options'
import Output from '../components/Output'
import Navbar from '../components/Navbar'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      numOfParagraphs: 2,
      length: 'short',
      type: 'para'
    }

    this.changedLengthHandler = this.changedLengthHandler.bind(this)
    this.changedNumHandler = this.changedNumHandler.bind(this)
    this.changedTypeHandler = this.changedTypeHandler.bind(this)
    this.fetchText = this.fetchText.bind(this)
  }

  componentDidMount () {
    this.fetchText()
  }

  changedLengthHandler (event) {
    this.setState({
      length: event.target.value
    })
  }

  changedNumHandler (event) {
    this.setState({
      numOfParagraphs: event.target.value
    })
  }

  changedTypeHandler (event) {
    this.setState({
      type: event.target.value
    })
  }

  fetchText (event = false) {
    if (event) {
      event.preventDefault()
    }
    const { numOfParagraphs, length, type } = this.state
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    let url = `https://loripsum.net/api/${numOfParagraphs}/${length}/${type}`

    if (type === 'para') {
      url = `https://loripsum.net/api/${numOfParagraphs}/${length}`
    }

    axios.get(`${proxy}${url}`).then(response => {
      const { data } = response

      this.setState({
        text: data
      })
    })
  }

  render () {
    return (
      <Container>
        <Navbar />
        <Options
          changedLength={this.changedLengthHandler}
          length={this.state.length}
          changedNum={this.changedNumHandler}
          num={this.state.numOfParagraphs}
          changedType={this.changedTypeHandler}
          type={this.state.type}
          submit={this.fetchText}
        />
        <Output text={this.state.text} />
      </Container>
    )
  }
}

export default App
