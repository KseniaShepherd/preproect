import React from 'react'
import CategoriesPage from './index'

describe('<CategoriesPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CategoriesPage />)
  })
})