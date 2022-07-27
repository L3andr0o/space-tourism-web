import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../assets/globalStyles';
import Head from '../components/head';
import NavBar from '../components/navBar';
import { useWidth } from '../hooks/useWidth';
import { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import data from '../assets/data.json';
import destination from '../types/destination';
import DestinationImg from '../components/destinationImg';

interface TitleProps{
	selected : number
}

const Wrapper = styled.div<TitleProps>`
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

	.content{
		margin: 0 auto;
    width: 85%;
    min-height: 75vh;
    height: fit-content;
    max-width: 340px;
    @media (min-width:475px) {
			max-width: 85%;
      margin-top: 20px;
      justify-content: space-between;
		}
    @media (min-width: 768px){
      display: flex;
      position: relative;
      max-width: 70em;
    }
		.top-left{
      @media (min-width: 768px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65vh;
        position: relative;
      }
			h1{
				font-size: 16px;
				font-weight: 200;
				color: #fff;
        margin: 0 auto;
        width: fit-content;
				font-family: 'Barlow Condensed';
				letter-spacing: 2px;
        @media (min-width:475px) {
        margin: 0;
		  }
      @media (min-width: 768px) {
        font-size: 22px;
      }
				span{
					color: #888;
					font-weight: 600;
				}
			}
			.planet{
				margin: 25px auto;
        width: fit-content;
        height: fit-content;
        user-select: none;
        @media (min-width: 768px) {
          margin: 0 auto;
          height: 22em;
          width: 95%;
          max-width: 22em;
        }

				.planet-img{
					height: 10em;
					width: 10em;
          @media (min-width: 475px){
            height: 12.5em;
            width: 12.5em;
          }
          @media (min-width: 768px) {
            height: 22em;
            width: 100%;
            max-width: 22em;
          }
				}
			}
		}
		.bottom-right{
      text-align: center;
      margin: 0 auto;
      max-width: 425px;
      @media (min-width: 768px) {
        width: 50%;
        max-width: 50%;
        margin-top: 10%;
        height: fit-content;
        text-align: left;
      }
			.selector{
				width: 80%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
        max-width: 220px;
        @media (min-width: 768px) {
          margin: 0;
        }
				span{
					color: #d0d6f9;
					font-family: 'Barlow Condensed';
					font-weight: 200;
					position: relative;
					font-size: 14px;
					user-select: none;
          cursor: pointer;

          &:hover{
            &::after{
						content: ' ';
						width: 100%;
						height: 1px;
						background-color: #fff;
						display: block;
						margin-top: 5px;
            animation: opt-hover .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal both;
					}
          @keyframes opt-hover {
            0%{transform: scaleX(0);}
            100%{transform: scaleX(1);}
          }
          }


          @media (min-width: 768px) {
          font-size: 18px;
        }
				}
				span:nth-child(${({selected})=>selected + 1}){
					color: #fff;
					&::after{
						content: ' ';
						width: 100%;
						height: 1px;
						background-color: #fff;
						display: block;
						margin-top: 5px;
					}
				}
				
			}
			.planet-info{
				margin-top: 10px;
				min-height: 188px;
				position: relative;
        @media (min-width: 475px){
          min-height: 150px;
        }
        @media (min-width: 768px) {
          min-height:15em;
          margin-top: 20px;
        }

				&::after{
					content: ' ';
					width: 100%;
					height: 1px;
					background-color: #fff;
					display: block;
					position: absolute;
					bottom: 0;
          @media (min-width: 768px) {
            width: 375px;
          }
				}

				h1{
					font-size: 50px;
					font-weight: 200;
					color: #fff;
					font-family: 'Bellefair';
					text-transform: uppercase;
          @media (min-width: 768px) {font-size: 80px;}
				}
				p{
					color: #d0d6f9;
					font-family: 'Barlow Condensed';
					font-weight: 200;
					line-height: 22px;
          max-width: 375px;
          @media (min-width: 768px) {font-size: 18px;}
				}
			}
			.travel-info{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 6.5em;
        margin: 0 auto;
				margin-top: 15px;
        @media (min-width: 475px){
          flex-direction: row;
          width: 18em;
        }
        @media (min-width: 768px) {
          margin: 0;
          margin-top: 20px;
        }
				div{
					h3{
					font-family: 'Barlow Condensed';
					color: #d0d6f9;
					font-weight: 200;
					font-size: 14px;
					letter-spacing: 2px;
          @media (min-width: 768px) {font-size: 16px;}
				}
				span{
					font-family: 'Bellefair';
					font-size: 25px;
					color: #fff;
					font-weight: 200;
					text-transform: uppercase;
          @media (min-width: 768px) {font-size: 25px;}
				}
				}
			}
		}
	}
`

export default function Destination(){

	const { Width, resize, isBrowser } = useWidth();
  useEffect(()=>{
    resize()
  },[isBrowser()])

	const [selected, setSelected] = useState<number>(0);
	const destinations : destination[] = data.destinations;


  return(
		<Wrapper selected={selected}>
			<Head />
			<GlobalStyles />
			<NavBar />

			{
      (Width >= 768)
      ? 
      <StaticImage src='https://www.99images.com/download-image/494642/1920x1080' alt='bg' quality={80} className='bg-img' />
      :
      <StaticImage src='https://myandroidwalls.com/wp-content/uploads/2022/01/Universe-Phone-Wallpaper-4k.jpg' alt='bg' quality={80} className='bg-img' />
    }

			<div className='content'>

				<div className='top-left'>
					<h1><span>01</span> PICK YOUR DESTINATION</h1>
					<div className='planet'>
						<DestinationImg num={selected}/>
					</div>
				</div>

				<div className='bottom-right'>
					<div className='selector'>
						<span onClick={()=> setSelected(0)}>MOON</span>
						<span onClick={()=> setSelected(1)}>MARS</span>
						<span onClick={()=> setSelected(2)}>EUROPA</span>
						<span onClick={()=> setSelected(3)}>TITAN</span>
					</div>
					<div className='planet-info'>
						<h1>{destinations[selected].name}</h1>
						<p>{destinations[selected].description}</p>
					</div>
					<div className='travel-info'>
						<div className='distance'>
							<h3>AVG. DISTANCE</h3>
							<span>{destinations[selected].distance}</span>
						</div>
						<div className='time'>
							<h3>EST. TRAVEL TIME</h3>
							<span>{destinations[selected].travel}</span>
						</div>
					</div>
				</div>

			</div>

		</Wrapper>
  )
}