module.exports = {
	siteMetadata: {
		title: 'Pedro Sousa',
		author: 'Pedro Sousa',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Personal portfolio.',
		keywords: `Web developer, Web, Developer, PHP, CSS, HTML, JS, Javascript, Gatsby, CSS3, HTML5`,
		twitter: 'https://twitter.com/pedroso_usa',
		github: `https://github.com/pedrosousa13`,
		siteUrl: `https://psousa.dev`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		`gatsby-plugin-sass`,
		`gatsby-plugin-sitemap`,
		{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:300,400,700`,
        ],
        display: 'swap'
      }
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog-pages`,
				path: `${__dirname}/src/pages/blog`,
			},
		},
		`gatsby-transformer-remark`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
