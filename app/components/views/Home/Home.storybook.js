import { storiesOf } from '@storybook/react'
import React from 'react'

import Home from './Home'

storiesOf('app/components/views/Home', module)
  .add('Home', () =>
    <Home />
  )
