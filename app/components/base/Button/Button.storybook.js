import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs/react'
import React from 'react'

import Button from './Button'

const onClick = action('clicked')

storiesOf('app/components/base/Button', module)
  .addDecorator(withKnobs)
  .add('Button', () =>
    <Button onClick={onClick}>
      { text('Label', 'Button') }
    </Button>
  )
