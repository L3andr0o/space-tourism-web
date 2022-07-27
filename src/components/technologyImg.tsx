import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useWidth } from '../hooks/useWidth';
import { useEffect } from 'react';

export default function TechImg({num} : {num : number}){

    const { Width, resize, isBrowser } = useWidth();
    useEffect(()=>{
    resize()
    },[isBrowser()]);

	const imagesMobile = [
		<StaticImage src='../assets/technology/image-launch-vehicle-landscape.jpg' alt='tech' className='tech-img' objectFit='fill'/>,
		<StaticImage src='../assets/technology/image-spaceport-landscape.jpg' alt='tech' className='tech-img' objectFit='fill'/>,
		<StaticImage src='../assets/technology/image-space-capsule-landscape.jpg' alt='tech' className='tech-img' objectFit='fill'/>
	]
    const imagesDesktop = [
		<StaticImage src='../assets/technology/image-launch-vehicle-portrait.jpg' alt='tech' className='tech-img' objectFit='fill'/>,
		<StaticImage src='../assets/technology/image-spaceport-portrait.jpg' alt='tech' className='tech-img' objectFit='fill'/>,
		<StaticImage src='../assets/technology/image-space-capsule-portrait.jpg' alt='tech' className='tech-img' objectFit='fill'/>
	]

  return(
    <>
		{
			(Width >= 768) ? imagesDesktop[num] : imagesMobile[num]
		}
    </>
  )
}