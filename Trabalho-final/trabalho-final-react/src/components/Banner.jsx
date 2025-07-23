import React from 'react'
import './Banner.css'
import Button2 from './Button2'


function Banner() {
  return (
    <div className='div-banner'>
        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp" alt="" />
        <div>   
            <h3>Caspian Sea Beach, Aktau</h3>
            <p>A Unique Seaside Escape in Central Asia</p>
            <div className='detail'>
                <p> 12 jun</p>
                <p> 5.0 Rating </p>
                <p> Bitch </p>
            </div>
            <div className='values'>
              <p>$2.550 <br />7 days package</p>
              <Button2 texto='Book Now'></Button2>
            </div>
        </div>
    </div>
  )
}

export default Banner