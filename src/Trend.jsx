import React from 'react'

function Trend({ image, no, title, text }) {
  return (
    <div className='trend'>
      <img className='trend__img' src={image} alt="retro pc" />
      <div className='trend__sub-container'>
          <h1 className='trend__header'>{no}</h1>
          <h2 className='trend__sub__header'>{title}</h2>
          <p className='trend__text'>{text}</p>
      </div>
    </div>
  )
}

export default Trend
