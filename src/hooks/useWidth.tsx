import { useState } from 'react';

export const useWidth = () =>{

  const [Width, setWidth] = useState(0);
  const isBrowser = () => typeof window !== 'undefined';

  const resize = ()=>{
    setWidth(window.innerWidth);
    window.addEventListener('resize',()=>{
      if(window.innerWidth >= 768){
        setWidth(768);
        return
      }setWidth(720)})}

	return{
		Width,
		resize,
		isBrowser
	}
}