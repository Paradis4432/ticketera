import React from 'react';
import Image from 'next/image';
import iconPreg from '../../../assets/pregicon.png'


const Preguntas = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-center'>
        <Image src={iconPreg} width={52} height={52} alt='' />
        <h1 className='font-koulen text-5xl mt-4'>Preguntas Frecuentes</h1>
        <p className='text-xl font-normal mt-4 text-[#797979] mb-[100px]'>Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices <br/> tellus consequat amet, lectus aliquam est in neque.</p>
    </div>
  )
}

export default Preguntas
