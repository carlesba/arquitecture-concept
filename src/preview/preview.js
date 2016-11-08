import React, {PropTypes} from 'react'

class Preview extends Component {
  render () {
    const { blocks, actions: {turnOn, turnOff} } = this.props
    return (
      <div>
        <h1>Preview</h1>
        <button
          onClick={() => {
            if (light) turnOff()
            else turnOn()
          }}>toggle the light</button>
        {blocks.map((block) =>
          <div>Block: {block.id}</div>
        )}
      </div>
    )
  }
}

export default Preview
