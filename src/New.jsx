import React from 'react'

function New({ title, text }) {
  return (
    <div className='aside__sub__container'>
          <h3 className='aside__sub__header'>{title}</h3>
          <p className='aside__sub__text'>{text}</p>
    </div>
  )
}

export default New
