import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Background from '../images/man-people-office-writing.jpg'

const FlexLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query FlexSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              height: '100vh',
              padding: '0px 0px',
              paddingTop: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              // background: 'rgba(0,0,0,0.3)',
            }}
          >
            {children}
        </div>
      </>
    )}
  />
)

FlexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FlexLayout
