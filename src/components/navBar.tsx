import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useState } from 'react';

const NavWrapper = styled.div`
	width: 100%;
	height: 5em;
	display: flex;
	align-items: center;
	padding: 0 15px;
	justify-content: space-between;

	.logo{
		.logo-icon{
			width: 2.5em;
			height: 2.5em;
		}
	}

	.open{
		.open-icon{
			width: 1.8em;
			height: 1.8em;
		}
	}

	.hidden{
		display: none !important;
	}
	.visible{
		animation: appear .3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 normal forwards;
	}
	@keyframes appear {
		0%{
			transform: translateX(100%);
		}100%{
			transform: translateX(0%);
		}
	}

	
	.burger-menu{
		position: absolute;
		width: 70%;
		max-width: 325px;
		height: 100vh;
		background-color: #7773;
		backdrop-filter: blur(15px);
		padding: 15px;
		right: 0;
		top: 0;
		z-index: 200;
		.close{
			position: absolute;
			right: 15px;
			top: 25px;
			.close-icon{
				width: 1.5em;
				height: 1.5em;
			}
		}

		ul{
			margin-top: 80px;
			font-family: 'Barlow Condensed';
			line-height: 55px;
			li{
				color: #fff;
				font-size: 16px;
				letter-spacing: 3px;
				span{
					font-weight: 800;
				}
			}
		}
	}

`

export default function NavBar(){

	const [menuState, setMenuState] = useState<string>('hidden');
	const menu = () : void =>(menuState === 'hidden') ? setMenuState('visible') : setMenuState('hidden');


	return(
		<NavWrapper>
			<div className='logo'>
				<StaticImage src='../assets/shared/logo.svg' alt='logo' className='logo-icon' />
			</div>
			<div className='open' onClick={()=> menu()}>
				<StaticImage src='../assets/shared/icon-hamburger.svg' alt='burger-icon' className='open-icon' />
			</div>
			<div className={`burger-menu ${menuState}`}>
				<div className='close' onClick={()=> menu()}>
					<StaticImage src='../assets/shared/icon-close.svg' alt='icon-close' className='close-icon' quality={80} />
				</div>
				<ul>
					<li><span>01</span> HOME</li>
					<li><span>02</span> DESINATION</li>
					<li><span>03</span> CREW</li>
					<li><span>04</span> TECHNOLOGY</li>
				</ul>
			</div>
		</NavWrapper>
	)
}