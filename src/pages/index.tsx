import * as React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { GlobalStyles } from '../assets/globalStyles'
import { useWidth } from '../hooks/useWidth'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;

  .bg-img{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -200;
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
      <GlobalStyles />
    {
      (Width >= 768)
      ? 
      <StaticImage src='https://i.pinimg.com/originals/65/06/49/650649777002195cac8b2c1845c86872.jpg' alt='bg' quality={80} className='bg-img' />
      :
      <StaticImage src='https://myandroidwalls.com/wp-content/uploads/2022/01/Universe-Mobile-Wallpaper-4k-1-576x1024.jpg' alt='bg' quality={80} className='bg-img' />
    }
    </Wrapper>
  )
}

export default IndexPage
