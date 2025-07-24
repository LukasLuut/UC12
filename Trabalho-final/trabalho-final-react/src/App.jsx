import './App.css'
import Header from './layouts/Header'
import Card from './layouts/Card'
import Button2 from './components/Button2'
import Banner from './components/Banner'


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
        <section className='section2'>
          <div className='div-section2 section2'>
            <h2>Elevate Your Epic <br></br> Adventures</h2>
            <p>We are a travel agency that specializes <br></br> in customizing trips according to your <br></br> preferences, needs, and desires</p>
          </div>
        </section>
        <section className='section3'>
          
          <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/exotic-tropical-seascape-with-palm-tree-jetty-pie-2024-10-18-08-01-58-utc.webp" alt="" />
        </section>
      </main>

    </>
  )
}

export default App
