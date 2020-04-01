import React from 'react';

import '../styles/style.scss'
import Helmet from './helmet'
import Header from './header'
import Body from './body'
import Footer from './footer'

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<Body />
		<Footer />
	</div>
)

export default Layout
