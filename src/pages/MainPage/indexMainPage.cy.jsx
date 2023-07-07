import React from 'react'
import MainPage from './index'

describe('<MainPage />', () => {
  it('renders', () => {
    cy.mount(<MainPage />)
    cy.get('[data-cy="h2"]').contains('Categories')
  })
})