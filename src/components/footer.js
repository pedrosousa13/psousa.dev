import React from 'react'
import { FaHeart, FaGithub } from 'react-icons/fa'
import gatsbyLogo from '../images/gatsby-icon.png'
import bulmaLogo from '../images/bulma-logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        Made with{' '}
        <span className="icon is-small has-text-danger">
          <FaHeart />
        </span>
        ,{' '}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon is-small ">
            <img src={gatsbyLogo} alt="gatsby-logo" />
          </span>
        </a>{' '}
        and{' '}
        <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
          <span className="icon is-small ">
            <img src={bulmaLogo} alt="bulma-logo" />
          </span>
        </a>
      </p>
    </div>
    <div className="github">
      <a
        href="https://github.com/pedrosousa13/psousa.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="tags has-addons">
          <span className="tag">View on github</span>
          <span className="tag is-dark">
            <FaGithub />
          </span>
        </div>
      </a>
    </div>
  </footer>
)

export default Footer
