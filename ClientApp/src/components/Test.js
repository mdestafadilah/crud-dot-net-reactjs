import React from 'react'
import TestForm from './TestForm'

export const Test = () => {

  const handleOnSubmit = (peserta) => {
    console.log(peserta);
  }

  return (
    <div>
      <TestForm handleSubmit={handleOnSubmit}/>
    </div>
  )
}
