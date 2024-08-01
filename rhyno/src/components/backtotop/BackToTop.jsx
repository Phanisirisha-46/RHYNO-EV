import React from 'react'
import './BackToTop.css'
import { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

function BackToTop(){
    const [backtotopbutton, setbacktotopbutton]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setbacktotopbutton(true)
            }else{
                setbacktotopbutton(false)
            }
        })
    },[])

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

  return (
    <div>
        {backtotopbutton &&(
            <button className='backtotop' onClick={scrollUp}><i class="fa-solid fa-arrow-up"></i></button>
        )}
    </div>
  )
}

export default BackToTop