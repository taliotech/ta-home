import React from 'react'
import { Link } from 'gatsby'

import FlexLayout from '../components/flex-layout'
import Logo from '../images/talio-logo.png'

const IndexPage = () => (
  <FlexLayout>
    <img src={Logo} style={{
      width: '225px',
      maxWidth: '90%',
    }} />
    <h1>Engineering education<br />reimagined for the 21st century</h1>
    <h2>Coming Soon...</h2>
  </FlexLayout>
)

export default IndexPage
