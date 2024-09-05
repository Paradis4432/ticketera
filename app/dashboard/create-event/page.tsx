"use client"

import EmailEntries from "@/components/forms/Email-Entries"
import BasicData from "@/components/forms/forms-sections/BasicData"
import ConfirmEvents from "@/components/forms/forms-sections/Confirm-Event"
import PaidGangway from "@/components/forms/forms-sections/Paid-Gangway"
import StagesDeTickets from "@/components/forms/forms-sections/Stages-Tickets"
import UsersForm from "@/components/forms/forms-sections/UsersForm"
import React, { useState } from "react"

interface FormDataProps {
  step1: {
    image: File | null
    name: string
    description: string
    startingDate: string
    endingDate: string
    location: string
    capacity: number
    isOverAge: boolean
    minAge: number
  }
  step2: {
    name: string
    startingDate: string
    endingDate: string
    ticketPrice: number
    stockAvailable: number
  }
  step3: {
    method: string
    cvu: string
  }
  step4: {
    list: []
  }
  step5: {
    image: File | null
    name: string
    description: string
    startingDate: string
    endingDate: string
    location: string
    capacity: number
    isOverAge: boolean
    minAge: number
  }
  step6: {
    eventName: string
    stageType: string
    tickets: number
    email: string
  }
}

export default function EventCreationForm() {
  const [currentStep, setCurrentStep] = useState(6)

  const [formData, setFormData] = useState<FormDataProps>({
    step1: {
      image: null,
      name: "",
      description: "",
      startingDate: "",
      endingDate: "",
      location: "",
      capacity: 0,
      isOverAge: false,
      minAge: 0,
    },
    step2: {
      name: "",
      startingDate: "",
      endingDate: "",
      ticketPrice: 0,
      stockAvailable: 0,
    },
    step3: {
      method: "",
      cvu: "",
    },
    step4: {
      list: [],
    },
    step5: {
      image: null,
      name: "",
      description: "",
      startingDate: "",
      endingDate: "",
      location: "",
      capacity: 0,
      isOverAge: false,
      minAge: 0,
    },
    step6: {
      eventName: "",
      stageType: "",
      tickets: 0,
      email: "",
    },
  })

  const handleFormDataChange = (step: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      // @ts-ignore
      [step]: { ...prev[step], ...data },
    }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData)
    // Add your submission logic here (e.g., API call)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicData
          // nextStep={nextStep}
          // handleFormDataChange={handleFormDataChange}
          // formData={formData.step1}
          />
        )
      case 2:
        return (
          <StagesDeTickets
          // nextStep={nextStep}
          // prevStep={prevStep}
          // handleFormDataChange={handleFormDataChange}
          // formData={formData.step2}
          />
        )
      case 3:
        return (
          <PaidGangway
          // nextStep={nextStep}
          // prevStep={prevStep}
          // handleFormDataChange={handleFormDataChange}
          // formData={formData.step3}
          />
        )
      case 4:
        return (
          <UsersForm
          // nextStep={nextStep}
          // prevStep={prevStep}
          // handleFormDataChange={handleFormDataChange}
          // formData={formData.step4}
          />
        )
      case 5:
        return (
          <ConfirmEvents
          // prevStep={prevStep}
          // handleSubmit={handleSubmit}
          // handleFormDataChange={handleFormDataChange}
          // formData={formData.step5}
          />
        )

      case 6:
        return (
          <EmailEntries
          // prevStep={prevStep}
          // handleSubmit={handleSubmit}
          // handleFormDataChange={handleFormDataChange}
          // formData={formData.step5}
          />
        )
      default:
        return null
    }
  }

  return <>{renderStep()}</>
}
