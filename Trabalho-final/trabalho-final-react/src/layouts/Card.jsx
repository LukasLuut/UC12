import React from 'react'
import './Card.css'
import { MdPlayArrow } from "react-icons/md";

function Card() {
  return (
    <section className='sec-maior'>
        <div className='sec-menor-esquerda'>
            <div className='div-sec-esquerda'>
                <div className='div-play'></div>
                <MdPlayArrow className='play-arrow'/>
                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/shifaaz-shamoon-_STLYdogRF4.webp" alt="praia" />
                <div className='div-pics-12k'>
                    <div className='div-img-card' >
                        <img id='div-img-perfil' src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar2-1.png" alt="" />
                        <img id='div-img-perfil1' src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar3-1.png" alt="" />
                        <img id='div-img-perfil2' src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/oliver-ragfelt-khV4fTy6-D8-unsplash-1.png" alt="" />
                        <a id='div-img-perfil3' href="#">+</a>
                    </div>
                    <p className='div12k'>
                     12K+ Membership <br></br> enjoy our facility
                    </p>
                </div>
            </div>
        </div>
        <div className='sec-menor-direita'>
            <h1>Less Hassle,<br></br>More Fun.</h1>
            <p>Discover a new way to travel that's fun, easy, and stress-free <br></br> Turn your dream destinations into unforgettable realities</p>
        </div>


    </section>
  )
}

export default Card