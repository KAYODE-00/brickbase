import React, { useEffect } from 'react'

function Splashscreen(props) {


  return (
    <>
      <div className={`splash ${props.loading ? 'splashscreen' : 'splashscreenhidden'}`}>

   
        <img src="logo-light.png" alt="" />
    </div>
    </>
  )
}

export default Splashscreen