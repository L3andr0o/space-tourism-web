import * as React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`


// markup
const IndexPage = () => {

  const [Width, setWidth] = useState(0);
  const isBrowser = () => typeof window !== 'undefined';


  const resize = ()=>{
    setWidth(window.innerWidth);
    window.addEventListener('resize',()=>{
      if(window.innerWidth >= 768){
        setWidth(768);
        return
      }setWidth(720)
    })
  }

  useEffect(()=>{
    resize()
  },[isBrowser()])

  
  
  return (
    <Wrapper>
    {
      (Width >= 768)
      ? 
      <StaticImage src='https://i.pinimg.com/originals/65/06/49/650649777002195cac8b2c1845c86872.jpg' alt='bg' quality={80}/>
      :
      <StaticImage src='https://myandroidwalls.com/wp-content/uploads/2022/01/Universe-Mobile-Wallpaper-4k-1-576x1024.jpg' alt='bg' quality={80}/>
    }
    </Wrapper>
  )
}

export default IndexPage
