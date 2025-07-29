import './App.css'
import Header from './layouts/Header'
import Card from './layouts/Card'
import Button2 from './components/Button2'
import Banner from './components/Banner'
import LittleCard from './components/LittleCard'
import Banner2 from './layouts/Banner2'


function App() {


  return (
    <>
      <Header />
      <main>
        <Card />
        <section className='recommended-destination-div'>
          <div className='recommended-destination-div2'>
            <h2>Recommended Destination</h2>
            <Button2 texto="View More"></Button2>
          </div>
          <div className='banners'>
            <Banner></Banner>
            <Banner></Banner>
            <Banner></Banner>
          </div>
        </section>
        <section className='section2' id='section2-1'>
          <div className='div-section2'>
            <h2>Elevate Your Epic <br></br> Adventures</h2>
            <p>We are a travel agency that specializes <br></br> in customizing trips according to your <br></br> preferences, needs, and desires</p>
          </div>
        </section>
        <section className='section3'>
          <section className='div-cards'>
            <LittleCard></LittleCard>
            <LittleCard></LittleCard>
            <LittleCard></LittleCard>
            <LittleCard></LittleCard>
          </section>
          <div className='bgPraia'></div>          
        </section>
        <Banner2></Banner2>
      </main>

    </>
  )
}

export default App
