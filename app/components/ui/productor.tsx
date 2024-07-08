import React from 'react';
import Image from 'next/image';
import imgProd from '../../../assets/imgprod.png'
import logoG from '../../../assets/logoG.png'
import Buttons from './buttons';

const Productor = () => {

  
    return (
    //Container
    <div className="w-full min-h-[400px] max-h-[995px] relative content-center bg-top bg-cover mb-[150px] mt-[150px]">
      <Image className="z-1 max-h-[615px] w-full bg-custom-1" src={imgProd} alt="" />
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center max-w-[1098px] max-h-[412px] border-[2px] border-solid bg-opacity-10 bg-white mx-auto my-auto rounded-2xl'>
        <div className="py-[8px] px-4 bg-[#292929] text-white rounded-2xl text-xl font-normal border-solid border-white border-1 mb-[16px] mx-auto flex">
                <Image className="w-[25px] mr-[10px]" src={logoG} alt=""/>
                Trabajemos juntos</div>
        <h1 className='opacity-100 z-4 font-semibold text-[52px] text-white flex justify-center mt-3'>¿Sos Productor de Eventos?<br/>Produce tus eventos con nosotros!</h1>
        <Buttons 
                 text="Registrarse Como Productor"
                 containerStyle="bg-white text-black rounded-xl mt-3 py-[20px] px-[36px] text-lg font-normal tracking-wide gap-[10px]"
                />
      </div>
      </div>
  )
}

export default Productor