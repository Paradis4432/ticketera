import React from 'react';
import Image from 'next/image';
import iconPreg from '../../../assets/pregicon.png'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Preguntas = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-center'>
        <Image src={iconPreg} width={52} height={52} alt='' />
        <h1 className='font-koulen text-5xl mt-4'>Preguntas Frecuentes</h1>
        <p className='text-xl font-normal mt-4 text-[#797979] mb-[100px]'>
          Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices 
          <br/> 
          tellus consequat amet, lectus aliquam est in neque.
        </p>
        <div className='max-w-[1000px] text-left mb-[150px]'>
        <article className='border-b-2 ml-2 flex justify-between pt-2 pb-3'>
          <h2 className='font-medium text-xl'>Quiero crear mi evento, es posible?</h2>
          <button>
            <SlArrowRight />
          </button>
          <button>
            <SlArrowDown />
          </button>
        </article>

        <article className='pb-2'>
          <p className='text-base font-normal text-[#797979] ml-2'>
            Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.
          </p>
        </article>

        <article className='border-b-2 ml-2 flex justify-between pt-2 pb-3'>
          <h2 className='font-medium text-xl'>Quiero crear mi evento, es posible?</h2>
          <button>
            <SlArrowRight />
          </button>
          <button>
            <SlArrowDown />
          </button>
        </article>

        <article>
          <p className='text-base font-normal text-[#797979] ml-2'>
            Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.
          </p>
        </article>
        </div>
    </div>
  )
}

export default Preguntas
