import React from 'react';
import styled from 'styled-components';
import { useWidth } from '../hooks/useWidth';
import { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GlobalStyles } from '../assets/globalStyles';
import NavBar from '../components/navBar';
import Head from '../components/head';
import data from '../assets/data.json';
import technology from '../types/technology';
import TechImg from '../components/technologyImg';

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
    width: 100%;
    height: 75vh;
    @media (min-width: 475px){
      margin-top: 20px;
    }
    @media (min-width: 768px) {
      padding-left: 8%;
    }
		.top-left{
			position: relative;
			h1{
				font-size: 16px;
				font-weight: 200;
				color: #fff;
				font-family: 'Barlow Condensed';
				letter-spacing: 2px;
        margin: 0 auto;
        width: fit-content;
        @media (min-width: 475px) {
          margin: 0;
          margin-left: 15px;
        }
        @media (min-width: 768px) {
          font-size: 22px;
          margin: 0;
        }
				span{
					color: #888;
					font-weight: 600;
				}
			}
			.tech{
				margin-top: 20px;
        @media (min-width: 768px) {
          position: absolute;
          right: 0;
          margin: 0;
        }
				.tech-img{
					height: 12em;
          @media (min-width: 475px){
            height: 15em;
          }
          @media (min-width: 768px) {
          height: 100%;
          
          }
				}
			}
		}
		.bottom-right{
			margin: 0 auto;
			margin-top: 20px;
			width: 90%;
			max-width: 340px;
      text-align: center;
      @media (min-width: 768px) {
        margin: 0;
        width: fit-content;
        max-width: 50%;
        text-align: left;
        display: flex;
        height: 15em;
        margin-top: 100px;
      }
			.selector{
				width: 60%;
				max-width: 10em;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				user-select: none;
        @media (min-width: 768px) {
          flex-direction: column;
          margin: 0;
          max-width: fit-content;
        }
				span{
					width: 40px;
					height: 40px;
					border-radius: 50%;
					border: 1px solid #fff;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
          transition: all .3s ease-in-out;
          cursor: pointer;
          &:hover{
            background-color: #fff;
            color: #000;
          }
          @media (min-width: 768px) {
            width: 60px;
            height: 60px;
          }
				}
				span:nth-child(${({selected})=> selected + 1}){
					background-color: #fff;
					color: #000;
				}
				
			}
			.tech-info{
				margin-top: 20px;
        @media (min-width: 768px) {
          margin: 0;
          max-width: 475px;
          margin-left: 40px;
          margin-top: 20px;
        }
				span{
					font-size: 16px;
					font-family: 'Barlow Condensed';
					font-weight: 200;
					color: #d0d6f9;
          text-transform: uppercase;
          @media (min-width: 768px) {
            font-size: 18px;
          }
				}
				h1{
					font-size: 25px;
					font-family: 'Bellefair';
					font-weight: 200;
					color: #fff;
					margin-top: 10px;
          text-transform: uppercase;
          @media (min-width: 768px) {
            font-size: 50px;
          }
				}
				p{
					font-size: 16px;
					font-family: 'Barlow Condensed';
					font-weight: 200;
					color: #d0d6f9;
					line-height: 25px;
					margin-top: 20px;
          @media (min-width: 475px) {
            margin-top: 10px;
          }
          @media (min-width: 768px) {
            font-size: 18px;
          }
				}
			}
		}
	}
`

export default function Technology(){

	const { Width, resize, isBrowser } = useWidth();
  useEffect(()=>{
    resize()
  },[isBrowser()]);
	const [selected, setSelected] = useState<number>(0);
	const technologies : technology[] = data.technology;


	return(
		<Wrapper selected={selected}>
			<Head />
			<GlobalStyles />
			<NavBar />
			{
      (Width >= 768)
      ? 
      <StaticImage src='https://images4.alphacoders.com/689/689588.jpg' alt='bg' quality={80} className='bg-img' />
      :
      <StaticImage src='https://wallpapercave.com/wp/wp5277153.jpg' alt='bg' quality={80} className='bg-img' />
    }
		<div className="content">
			<div className="top-left">
				<h1><span>03</span> SPACE LAUNCH 101</h1>
				<div className="tech">
					<TechImg num={selected} />
				</div>
			</div>
			<div className="bottom-right">
				<div className="selector">
					<span onClick={()=> setSelected(0)}>1</span>
					<span onClick={()=> setSelected(1)}>2</span>
					<span onClick={()=> setSelected(2)}>3</span>
				</div>
				<div className="tech-info">
					<span>THE TERMINOLOGY...</span>
					<h1>{technologies[selected].name}</h1>
					<p>{technologies[selected].description}</p>
				</div>
			</div>
		</div>
		</Wrapper>
	)
}