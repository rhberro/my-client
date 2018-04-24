import { Provider } from 'react-redux'
import React from 'react'

import Store from '../../../store'

function StoreProvider (props) {
  return (
    <Provider store={Store}>
      { props.children }
    </Provider>
  )
}

export default StoreProvider
