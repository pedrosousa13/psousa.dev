import React from 'react';
import Terminal from './terminal'

const Body = () => (
	<section className="section section-padding">
		<div className="container">
			<div className="columns is-vcentered">
				<div className="column is-one-third-desktop">
					<h1 className="main-title title">
						> Pedro Sousa <span className="animated-caret"></span>
					</h1>
					<h2 className="subtitle">
						Full Stack Web Developer
					</h2>
				</div>
				<div className="column is-two-thirds-desktop terminal">
					<Terminal />
				</div>
			</div>
		</div>
	</section>
);

export default Body;
