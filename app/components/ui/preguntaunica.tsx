import  React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

type PreguntaunicaProps = {
    pregunta: string;
    respuesta: string;
  };

export default function Preguntaunica({ pregunta, respuesta }: PreguntaunicaProps) {
    const [showAns, setShowAns] = useState(false);

  return (
    <>
    <article className='border-b-2 ml-2 flex justify-between pt-2 pb-3'>
          <h2 onClick={() => setShowAns(!showAns)} className='font-medium text-xl cursor-pointer'>{pregunta}</h2>
          <ul>
            {!showAns && <li> 
                <button onClick={() => setShowAns(true)}>
                <SlArrowRight />
                </button></li>}
            {showAns && <li> <button onClick={() => setShowAns(false)}>
            <SlArrowDown />
          </button></li>}
          </ul>
        </article>

        <article className='text-left'>
            {showAns && <p className='text-base font-normal text-[#797979] ml-2'>{respuesta}</p>}
        </article>
    </>
  );
}
