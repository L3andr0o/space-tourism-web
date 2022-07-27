import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useState } from 'react';
import { Link } from 'gatsby';

const NavWrapper = styled.div`
	width: 100%;
	height: 5em;
	display: flex;
	align-items: center;
	padding: 0 15px;
	justify-content: space-between;
	@media (min-width:475px) {
		padding: 0;
		padding-left: 15px;
	}

	.logo{
		.logo-icon{
			width: 2.5em;
			height: 2.5em;
		}
	}

	.open{
		@media (min-width:475px) {
			display: none;
		}
		.open-icon{
			width: 1.8em;
			height: 1.8em;
		}
	}

	.hidden{
		display: none !important;
		@media (min-width: 475px) {
			display: block !important;
		}
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
		@media (min-width:475px) {
			position: relative;
			height: 100%;
			padding: 0;
			max-width: 455px;
		}
		.close{
			position: absolute;
			right: 15px;
			top: 25px;
			@media (min-width:475px) {
			display: none;
			}	
			.close-icon{
				width: 1.5em;
				height: 1.5em;
			}
		}

		ul{
			margin-top: 80px;
			font-family: 'Barlow Condensed';
			line-height: 55px;
			@media (min-width:475px) {
			margin: 0;
			line-height: normal;
			padding: 0 10px;
			height: 100%;
			width: 100%;
      max-width: 395px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			}
			li{
			@media (min-width:475px) {
			display: inline;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
			}
				.link-active{
				@media (min-width:475px) {
					&::after{
            content: ' ';
            display: block;
            position: absolute;
            bottom: 1px;
            width: 100%;
            height: 1px;
            background-color: #fff;
          }
				}
				}
				a{
				color: #fff;
				font-size: 16px;
				letter-spacing: 3px;
				span{
					font-weight: 800;
					@media (min-width:475px) {
					display: none;}
				}
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
					<li><Link to='/' activeClassName='link-active'><span>01</span> HOME</Link></li>
					<li><Link to='/destination' activeClassName='link-active'><span>02</span> DESINATION</Link></li>
					<li><Link to='/crew' activeClassName='link-active'><span>03</span> CREW</Link></li>
					<li><Link to='/technology' activeClassName='link-active'><span>04</span> TECHNOLOGY</Link></li>
				</ul>
			</div>
		</NavWrapper>
	)
}