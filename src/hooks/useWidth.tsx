import { useState } from 'react';

export const useWidth = () =>{

  const [Width, setWidth] = useState<number>(0);
  const isBrowser = () : boolean => typeof window !== 'undefined';

  const resize = () : void =>{
    setWidth(window.innerWidth);
    window.addEventListener('resize',()=>{
      if(window.innerWidth >= 768){
        setWidth(768);
        return
      }setWidth(720)})
		}

	return{
		Width,
		resize,
		isBrowser
	}
}