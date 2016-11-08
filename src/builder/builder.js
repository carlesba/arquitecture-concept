import React, {Component} from 'react'
import {getBlocksLength} from './reducers'

class Builder extends Component {
  render () {
    const { state, actions: {addBlock, removeBlock}} = this.props
    const blocksLength = getBlocksLength(state)
    return (
      <div>
        <h1>Builder</h1>
        <div>
          <p>So far we have <bold>{blocksLength}</bold></p>
        </div>
        <button onClick={() => addBlock()}>add block</button>
        <button onClick={() => removeBlock()}>remove block</button>
      </div>
    )
  }
}

export default Builder
