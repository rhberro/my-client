import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getUser } from '../../actions/User'

class User extends React.Component {
  componentWillMount () {
    const { getUser } = this.props
    getUser()
  }

  render () {
    const { user: { fetching, error, success } } = this.props
    if (fetching) return <div>Status: Loading</div>
    if (error) return <div>Status: Error</div>
    if (success) return <div>Status: Success</div>
    return <div>Status: Placeholder</div>
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
