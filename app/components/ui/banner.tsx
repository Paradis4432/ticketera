import React from 'react'
import Image from 'next/image'
import bynlogo from '../../../assets/bynlogo.png'

const Banner = () => {
  return (
    <div className="w-full min-h-[76px] bg-[#54E686] z-1 mt-0 flex items-center justify-start">
                <div className="w-full text-white overflow-hidden flex justify-between">
                    <Image className="h-[32px] w-[195px] ml-6 mr-6" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px] mr-6" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px] mr-6" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px] mr-6" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px] mr-6" src={bynlogo} alt=""/>
                    <Image className="h-[32px] w-[195px]" src={bynlogo} alt=""/>
                </div>
            </div>
  )
}

export default Banner 
