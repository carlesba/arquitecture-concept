import React from 'react'
import {connect} from 'react-redux'
import {
  view as Preview,
  actions as previewActions
} from './preview'
import {
  view as Builder,
  actions as builderActions
} from './builder'

class Wrapper extends Component {
  render () {
    const {state, ...actions} = this.props
    return (
      <div>
        <Builder state={state} actions={actions} />
        <Preview state={state} actions={actions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => state
// const mapStateToProps = (state, props) => {
//   return {
//     preview: state.preview,
//     blocks: state.builder
//   }
// }

export default connect(
  mapStateToProps,
  {
    ...previewActions,
    ...builderActions
  }
)(Wrapper)
