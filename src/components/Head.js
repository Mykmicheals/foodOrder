import React from 'react'
import classes from './Head.module.css'

function Head() {
  return (
      <div className={classes.header}>
          <h1>Logo</h1>
          <nav className={classes.nav}>
              <p>Home</p>
              <p>About</p>
              <p>Account</p>
              <p>Contact</p>
          </nav>
          <p className={classes.hamburger}>M</p>
    </div>
  )
}

export default Head