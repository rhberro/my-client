import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getUser } from '../../actions/User'

class User extends React.Component {
  componentWillMount () {
    const { getUser } = this.props
    getUser()
  }

  _renderLoading () {
    return (
      <div>Status: Loading</div>
    )
  }

  _renderError () {
    return (
      <div>Status: Error</div>
    )
  }

  _renderSuccess () {
    return <div>Status: Success</div>
  }

  _renderPlaceholder () {
    return <div>Status: Placeholder</div>
  }

  render () {
    const { user: { fetching, error, success } } = this.props
    if (fetching) return this._renderLoading()
    if (error) return this._renderError()
    if (success) return this._renderSuccess()
    return this._renderPlaceholder()
  }
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { getUser },
  dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
