import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../assets/globalStyles';
import NavBar from '../components/navBar';
import Head from '../components/head';
import { useWidth } from '../hooks/useWidth';
import { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CrewImg from '../components/crewImg';
import data from '../assets/data.json';
import crew from '../types/crew';

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
    height: 75vh;
    max-width: 340px;
    position: relative;
    @media (min-width:475px) {
			max-width: 85%;
      margin-top: 20px;
      height: 85.5vh;
		}
		.top-left{
			position: relative;
      @media (min-width: 475px){
        position: static;
      }
			&::after{
				content: ' ';
				width: 100%;
				height: 1px;
				background-color: #5a5454;
				display: block;
				position: absolute;
				bottom: 0;
        @media (min-width:475px) {
          display: none;
		 }
			}
			h1{
				font-size: 16px;
				font-weight: 200;
				color: #fff;
				font-family: 'Barlow Condensed';
				letter-spacing: 2px;
        width: fit-content;
        margin: 0 auto;
        @media (min-width:475px) {
          margin: 0;
		  }
				span{
					color: #888;
					font-weight: 600;
				}
			}
			.crew-member{
        margin: 0 auto;
				margin-top: 20px;
				min-height: 237px;
				position: relative;
        display: flex;
        width: fit-content;
        @media (min-width:475px){
          position: absolute;
          bottom: 0;
          left: calc(50% - 7em);
        }
				.crew-member-img{
					width: 10em;
					height: auto;
          @media (min-width:475px){
            width: 14em;
            height: 305px;
          }
				}
			}
		}
		.bottom-right{
			margin-top: 20px;
      @media (min-width: 475px) {
        display: flex;
        min-height: 227px;
        flex-direction: column;
        justify-content: space-around;
      }
			.selector{
				width: 40%;
				max-width: 6em;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				user-select: none;
        @media (min-width:475px) {
          order: 2; 
        }
				div{
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background-color: #616e7e;
				}
				div:nth-child(${({selected})=> selected + 1}){
					background-color: #fff;
				}
			}
			.crew-info{
        margin: 0 auto;
				margin-top: 40px;
        text-align: center;
        @media (min-width: 475px) {
          margin-top: 0;
        }
				span{
					font-size: 16px;
					font-family: 'Bellefair';
					font-weight: 200;
					color: #868585;
          text-transform: uppercase;
				}
				h1{
					font-size: 25px;
					font-family: 'Bellefair';
					font-weight: 200;
					color: #fff;
					margin-top: 10px;
          text-transform: uppercase;
          @media (min-width: 475px){
            font-size: 40px;
          }
				}
				p{
					font-size: 16px;
					font-family: 'Barlow Condensed';
					font-weight: 200;
					color: #d0d6f9;
					line-height: 25px;
          margin: 0 auto;
					margin-top: 20px;
          
          @media (min-width: 475px) {
            min-height: 100px;
            max-width: 345px;
            margin-top: 10px;
          }
				}
			}
		}
	}

`

export default function Crew(){

	const { Width, resize, isBrowser } = useWidth();
  useEffect(()=>{
    resize()
  },[isBrowser()]);
	const [selected, setSelected] = useState<number>(0);
	const crewMembers : crew[] = data.crew;

  return(
		<Wrapper selected={selected}>
			<Head />
			<GlobalStyles />
			<NavBar />

			{
      (Width >= 768)
      ? 
      <StaticImage src='https://wallpaperaccess.com/full/2044842.jpg' alt='bg' quality={80} className='bg-img' />
      :
      <StaticImage src='http://papers.co/wallpaper/papers.co-mg00-cloud-flare-dark-sky-wanna-fly-nature-34-iphone6-plus-wallpaper.jpg' alt='bg' quality={80} className='bg-img' />
    }

		<div className="content">
			<div className="top-left">
				<h1><span>02</span> MEET YOUR CREW</h1>
				<div className="crew-member">
					<CrewImg num={selected}/>
				</div>
			</div>
				
			<div className="bottom-right">
				<div className="selector">
					<div onClick={()=> setSelected(0)}></div>
					<div onClick={()=> setSelected(1)}></div>
					<div onClick={()=> setSelected(2)}></div>
					<div onClick={()=> setSelected(3)}></div>
				</div>
				<div className="crew-info">
					<span>{crewMembers[selected].role}</span>
					<h1>{crewMembers[selected].name}</h1>
					<p>{crewMembers[selected].bio}</p>
				</div>
			</div>
		</div>

		</Wrapper>
  )
}