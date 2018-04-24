import { storiesOf } from '@storybook/react'
import React from 'react'

import About from './About'

storiesOf('app/components/views/About', module)
  .add('About', () =>
    <About />
  )
