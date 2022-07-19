import React from 'react'
import AddDate from '../components/form/AddDate'
import Header from '../components/Header'

const Form = () => {
  return (
    <div>
      <Header seguimiento={1} link={'/offices'} status={2}/>
      <AddDate />

    </div>
  )
}

export default Form