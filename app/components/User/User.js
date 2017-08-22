import React from 'react'

const User = ({ fetching, error, success }) => {
  if (fetching) return <span>Status: Loading</span>
  if (error) return <span>Status: Error</span>
  if (success) return <span>Status: Success</span>
  return <span>Status: Placeholder</span>
}

export default User
