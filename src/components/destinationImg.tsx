import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function DestinationImg({num} : {num : number}){

	const images = [
		<StaticImage src='../assets/destination/image-moon.webp' alt='planet' className='planet-img' objectFit='fill'/>,
		<StaticImage src='../assets/destination/image-mars.webp' alt='planet' className='planet-img' objectFit='fill'/>,
		<StaticImage src='../assets/destination/image-europa.webp' alt='planet' className='planet-img' objectFit='fill'/>,
		<StaticImage src='../assets/destination/image-titan.webp' alt='planet' className='planet-img' objectFit='fill'/>
	]

  return(
    <>
		{
			images[num]
		}
    </>
  )
}