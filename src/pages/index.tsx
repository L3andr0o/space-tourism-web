import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GlobalStyles } from '../assets/globalStyles';
import { useWidth } from '../hooks/useWidth';
import NavBar from '../components/navBar';
import Head from '../components/head';

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

  .content{
    margin: 20px auto;
    width: 90%;
    text-align: center;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content-text{
      h2,p{
        font-family: 'Barlow Condensed';
        color: #d0d6f9;
        font-weight: 200;
      }
      h2{
        font-size: 15px;
        letter-spacing: 3px;
      }
      h1{
        font-size: 55px;
        color: #fff;
        font-family: 'Bellefair';
        font-weight: 200;
        margin: 20px 0;
      }
      p{
        line-height: 25px;
      }
    }

    .explore{
      height: 10em;
      width: 10em;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      span{
        font-size: 22px;
        font-family: 'Bellefair';
      }
    }
  }
`


// markup
const IndexPage = () => {

  const { Width, resize, isBrowser } = useWidth();

  useEffect(()=>{
    resize()
  },[isBrowser()])
  
  return (
    <Wrapper>
      <Head />
      <GlobalStyles />
      <NavBar />
    {
      (Width >= 768)
      ? 
      <StaticImage src='https://i.pinimg.com/originals/65/06/49/650649777002195cac8b2c1845c86872.jpg' alt='bg' quality={80} className='bg-img' />
      :
      <StaticImage src='https://i.pinimg.com/originals/87/ec/24/87ec24b0cfe72729031eba92dc8b178c.jpg' alt='bg' quality={80} className='bg-img' />
    }

      <div className='content'>
        <div className='content-text'>
          <h2>SO, YOU WANNA TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='explore'>
          <span>EXPLORE</span>
        </div>
      </div>

    </Wrapper>
  )
}

export default IndexPage
