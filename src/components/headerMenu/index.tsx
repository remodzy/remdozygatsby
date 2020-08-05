import React from 'react'
import { Link } from 'gatsby'
import { getColor } from '../../utils/colors'

const linkColor = getColor({
  group: 'main',
  color: 'text',
})

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: 516,
  },
  link: {
    textDecoration: `none`,
    color: linkColor.main,
    fontSize: 16,
    fontWeight: 500,
  },
}

export default function HeaderMenu() {
  return (
    <div style={styles.root}>
      <Link style={styles.link} to="home">
        Products
      </Link>
      <Link style={styles.link} to="home">
        Integrations
      </Link>
      <Link style={styles.link} to="home">
        Pricing
      </Link>
      <Link style={styles.link} to="home">
        Blog
      </Link>
    </div>
  )
}
