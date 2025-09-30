'use client'

import React, { useRef } from 'react'
import GeneralInformation from './sections/view-personal-information/general-information'
import Title from '@/components/title'
import PersonalDetails from './sections/view-personal-information/personal-details'
import RecidenceData from './sections/view-personal-information/recidence-data'
import PhysicalDescription from './sections/view-personal-information/physical-description'
import { useReactToPrint } from 'react-to-print'
import { Button } from '@/components/ui/button'

export default function ViewPersonalInformation() {

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({
    contentRef
  });

  return (
    <>
      <section ref={contentRef} className={"space-y-10 print:space-y-10 print:m-[8mm]"}>
        <div className="flex justify-end">
          <Button size='sm' onClick={reactToPrintFn} className='print:hidden '>Print</Button>
        </div>
        <Title className={'print:text-center'}> General Student Personal Information Sheet (GSPIS) </Title>
        <GeneralInformation />
        <hr />
        <PersonalDetails />
        <hr />
        <RecidenceData />
        <hr />
        <PhysicalDescription />
      </section>
    </>
  )
}
