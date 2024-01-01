import React from 'react'
import New from './New.jsx'

function Aside() {
  return (
    <aside>
          <h1 className='aside__big-header'>New</h1>

          <New
              title='Hydrogen VS Electric Cars'
              text='Will hydrogen-fueled cars ever catch up to EVs?' />
         
          <New
              title='The Downsides of AI Artistry'
              text='What are the possible adverse effects of on-demand AI image generation?' />
          
          <New
              title='Is VC Funding Drying Up?'
              text='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />
          
    </aside>
  )
}

export default Aside
