import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function CrewImg({num} : {num : number}){

	const images = [
		<StaticImage src='../assets/crew/image-douglas-hurley.webp' alt='crew-member' className='crew-member-img'
		objectFit='fill'/>,
		<StaticImage src='../assets/crew/image-mark-shuttleworth.webp' alt='crew-member' className='crew-member-img'
		objectFit='fill'/>,
		<StaticImage src='../assets/crew/image-victor-glover.webp' alt='crew-member' className='crew-member-img'
		objectFit='fill'/>,
		<StaticImage src='../assets/crew/image-anousheh-ansari.webp' alt='crew-member' className='crew-member-img' objectFit='fill'/>
	]

  return(
    <>
		{
			images[num]
		}
    </>
  )
}