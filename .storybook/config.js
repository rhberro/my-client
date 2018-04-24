import { configure } from '@storybook/react'

function getContext () {
  return require.context('../app', true, /storybook\.js$/)
}

function loadStories () {
  const context = getContext()
  return context.keys().forEach(context)
}

configure(loadStories, module)
