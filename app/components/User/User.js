import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getUser } from '../../actions/User'

class User extends React.Component {
  constructor () {
    super()
    this._renderLoading = <div>Status: Loading</div>
    this._renderError = <div>Status: Error</div>
    this._renderSuccess = <div>Status: Success</div>
    this._renderPlaceholder = <div>Status: Placeholder</div>
  }

  componentWillMount () {
    const { getUser } = this.props
    getUser()
  }

  render () {
    const { user: { fetching, error, success } } = this.props
    if (fetching) return this._renderLoading
    if (error) return this._renderError
    if (success) return this._renderSuccess
    return this._renderPlaceholder
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
