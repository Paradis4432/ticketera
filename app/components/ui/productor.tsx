import React from 'react';
import Image from 'next/image';
import imgProd from '../../../assets/imgprod.png'
import logoG from '../../../assets/logoG.png'
import Buttons from './buttons';

const Productor = () => {

  
    return (
    //Container
    <div className="w-full min-h-[400px] max-h-[995px] relative content-center bg-cover mb-[150px] mt-[150px]">
      <Image className="z-0 relative h-[50vh] md:max-h-[615px] bg-cover" src={imgProd} alt="" />
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center h-[25vh] w-[312px] md:max-w-[1098px] md:max-h-[412px] border-[2px] border-solid bg-opacity-10 bg-white mx-auto my-auto rounded-2xl'>
        <div className="py-[4px] px-[8px] md:py-[8px] md:px-4 bg-[#292929] text-white rounded md:rounded-2xl text-[10px] md:text-xl font-normal border-solid border-white border-1 mb-[16px] mx-auto flex">
                <Image className="w-[15px] md:w-[25px] mr-[10px]" src={logoG} alt=""/>
                Trabajemos juntos</div>
        <h1 className='opacity-100 z-4 font-semibold text-xl md:text-[52px] text-white flex flex-col justify-center md:mt-3 leading-[26px]'>¿Sos Productor de Eventos?<br/><span className='text-base font-semibold leading-6'>¡Produce tus eventos con nosotros!</span></h1>
        <Buttons 
                 text="Registrarse Como Productor"
                 containerStyle="bg-white text-black rounded md:rounded-xl mt-3 py-[11px] px-[16px] md:py-[20px] md:px-[36px] text-[9px] font-normal tracking-wide gap-[10px]"
                />
      </div>
      </div>
  )
}

export default Productor