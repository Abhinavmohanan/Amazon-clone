import {React,useEffect,useState} from 'react'

export const useViewPort = () => {
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
            const handleWindowSize = ()=> setWidth(window.innerWidth);
            window.addEventListener("resize",handleWindowSize);
            return ()=> {
                window.removeEventListener("resize",handleWindowSize);
            }
        },[]);
    return width;    
}


