import React from 'react'

function New({ title, text }) {
  return (
    <div className='aside__sub__container'>
          <h2 className='aside__sub__header'>{title}</h2>
          <p className='aside__sub__text'>{text}</p>
    </div>
  )
}

export default New
