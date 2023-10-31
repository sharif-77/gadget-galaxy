import { useState } from "react";
import { MdNightlight,MdOutlineLightMode } from 'react-icons/md';


const Theme = () => {
    const [theme,setTheme]=useState('light')

    const changeTheme = ()=>{
        const container= document.documentElement
        if (theme==='light') {
            container.classList.remove('light')
            container.classList.add('dark')
            setTheme('dark')

        } else {
            container.classList.remove('dark')
            container.classList.add('light')
            setTheme('light')

            
        }
    }
  
    return (
        <div>
            <button className="text-3xl" onClick={changeTheme}>{theme==='light'? <MdNightlight/>:<MdOutlineLightMode/>}</button>
            
        </div>
    );
};

export default Theme;