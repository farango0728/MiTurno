import React from 'react'
import Header from '../components/Header'
import SectionOficce from '../components/offices/SectionOficce'

const Offices = () => {
  return (
    <>
      <Header seguimiento={1} link={'/'} status={1}/>
      <SectionOficce />
    </>
  )
}

export default Offices