import React from 'react'
import Terminal from './terminal'

const Body = () => (
  <>
    <section className="section section-padding">
      <div className="container">
        <div className="columns is-desktop is-vcentered">
          <div className="column is-one-third-desktop has-text-centered-mobile has-text-centered-tablet has-text-left-desktop">
            <h1 className="main-title title">
              > Pedro Sousa <span className="animated-caret"></span>
            </h1>
            <h2 className="subtitle">Full Stack Web Developer</h2>
          </div>
          <div className="column is-two-thirds-widescreen terminal">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered">
        <div className="columns is-desktop is-centered">
					<div className="column is-three-quarters">
							<h1 className="title">> About me</h1>
						<p>
							I am a full stack web developer at{' '}
							<a
								href="https://ef.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Education First
							</a>{' '}
							with a demonstrated history of working in the marketing, advertising
							and Ecommerce industries. Skilled in PHP, React, JS, Node, Magento 2
							and Mysql.
						</p>
					</div>
				</div>
      </div>
    </section>
  </>
)

export default Body
