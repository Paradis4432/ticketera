"use client"

import React from "react"
import { useSearchParams } from "next/navigation"

const StepComplete = () => (
  <li className="flex w-full items-center text-green-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block">
    <span className="flex items-center justify-center w-10 h-10 bg-green-200 rounded-full lg:h-12 lg:w-12 shrink-0">
      <svg
        className="w-4 h-4 text-green-600 lg:w-6 lg:h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    </span>
  </li>
)

const StepCurrent = ({ number }: { number: string }) => (
  <li className="flex w-full items-center text-black after:content-[''] after:w-full after:h-1 after:border-b after:border-green-200 after:border-4 after:inline-block">
    <span className="flex items-center justify-center w-10 h-10 bg-green-200 rounded-full lg:h-12 lg:w-12 shrink-0 font-bold">
      {number}
    </span>
  </li>
)

const ProgressBar = () => {
  const searchParams = useSearchParams()
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Creación del Evento.</h1>
      <ol className="flex items-center w-full">
        <StepCurrent number="01" />
        <StepCurrent number="02" />
        <StepCurrent number="03" />
        <StepCurrent number="04" />
        <StepCurrent number="05" />
        <StepCurrent number="06" />
      </ol>
      <ol className="flex items-center w-full mt-2">
        <li className="flex w-full items-start text-black">
          <small className="text-black text-base font-semibold">
            Datos basicos
          </small>
        </li>
        <li className="flex w-full items-start text-black">
          <small className="text-black text-base font-semibold">
            Stages de Tickets
          </small>
        </li>
        <li className="flex w-full items-start text-black">
          <small className="text-black text-base font-semibold">
            Pasarela de Pago
          </small>
        </li>
        <li className="flex w-full items-start text-black">
          <small className="text-black text-base font-semibold">Usuarios</small>
        </li>
        <li className="flex w-full items-start text-black">
          <small className="text-black text-base font-semibold">
            Confirmacion
          </small>
        </li>
        <li className="flex w-full items-start text-black">
          <small className="text-black text-base font-semibold">
            Enviar Tickets
          </small>
        </li>
      </ol>
    </div>
  )
}

export default ProgressBar
