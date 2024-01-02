import React from 'react'
import firstTrendImage from './assets/images/image-retro-pcs.jpg'
import secondTrendImage from './assets/images/image-top-laptops.jpg'
import thirdTrendImage from './assets/images/image-gaming-growth.jpg'
import Trend from './Trend.jsx'

function Trending() {
  return (
    <div role='footer' className='trending'>
        
          <Trend 
              image={firstTrendImage}
              no='01'
              title='Reviving Retro PCs'
              text='What happens when old PCs are given modern upgrades?' />
          
          <Trend 
              image={secondTrendImage}
              no='02'
              title='Top 10 Laptops of 2022'
              text='Our best picks for various needs and budgets.' />
          
          <Trend 
              image={thirdTrendImage}
              no='03'
              title='The Growth of Gaming'
              text='How the pandemic has sparked fresh opportunities.' />

    </div>
  )
}

export default Trending
