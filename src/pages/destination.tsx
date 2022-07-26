import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../assets/globalStyles';
import Head from '../components/head';
import NavBar from '../components/navBar';
import { useWidth } from '../hooks/useWidth';
import { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow-X: hidden;

	.bg-img{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -200;
  }

`

export default function Destination(){

	const { Width, resize, isBrowser } = useWidth();

  useEffect(()=>{
    resize()
  },[isBrowser()])

  return(
		<Wrapper>
			<Head />
			<GlobalStyles />
			<NavBar />

			{
      (Width >= 768)
      ? 
      <StaticImage src='https://i.pinimg.com/originals/6e/45/50/6e455092c18189888006b8380c2b29a6.jpg' alt='bg' quality={80} className='bg-img' />
      :
      <StaticImage src='https://wallpapercave.com/wp/wp7786646.jpg' alt='bg' quality={80} className='bg-img' />
    }

			<div className="content">

				<div className="top-left">
					<h1><span>01</span> PICK YOUR DESTINATION</h1>
					<div className="planet">
						<StaticImage src='../assets/destination/image-mars.webp' alt='planet' />
					</div>
				</div>

				<div className="bottom-rigth">
					<div className="selector">
						<span>MOON</span>
						<span>MARS</span>
						<span>EUROPA</span>
						<span>TITAN</span>
					</div>
					<div className="planet-info">
						
					</div>
				</div>

			</div>

		</Wrapper>
  )
}