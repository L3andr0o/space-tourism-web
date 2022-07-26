import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head(){
  return(
		<Helmet>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
			<link href='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800&family=Bellefair&display=swap' rel='stylesheet'></link>
			<link rel='icon' href='https://iconape.com/wp-content/png_logo_vector/galaxy.png' />
			<title>Space Tourism Web</title>
		</Helmet>
  )
}