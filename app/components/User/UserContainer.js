import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import User from './User'
import { getUser } from '../../actions/User'

class UserContainer extends React.Component {
  componentWillMount () {
    const { getUser } = this.props
    getUser()
  }

  render () {
    const { user: { fetching, error, success } } = this.props
    return (
      <User
        fetching={fetching}
        error={error}
        success={success} />
    )
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
)(UserContainer)
