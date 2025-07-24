import React from 'react'
import './Banner.css'
import Button2 from './Button2'


function Banner() {
  return (
    <div className='div-banner'>
        <div className='div-country'>
          <img src="https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg" alt="bandeira do Kazakhstan" />
          <p>Kazakhstan</p>
        </div>
        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp" alt="" />
        <div>   
            <h3>Caspian Sea Beach, Aktau</h3>
            <p className='desc-destination'>A Unique Seaside Escape in Central Asia</p>
            <div className='detail'>
                <div className='p-icon'>
                  <img src="src/img/calendario.png" alt="ícone de um calendário" />
                  <p> 12 jun</p>
                </div>
                <p>|</p>
                <div className='p-icon'>
                  <img src="src/img/estrela.png" alt="" />
                  <p> 5.0 Rating </p>                  
                </div>
                <p>|</p>
                <div className='p-icon'>
                  <img src="src/img/guarda-sol.png" alt="" />
                  <p> Bitch </p>
                </div>
                
            </div>
            <div className='values'>
              <p>$2.550 <br /><span>7 days package</span></p>
              <Button2 texto='Book Now'></Button2>
            </div>
        </div>
    </div>
  )
}

export default Banner