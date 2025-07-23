import './App.css'
import Header from './layouts/Header'
import Card from './layouts/Card'
import Button2 from './components/Button2'
import Banner from './components/Banner'


function App() {
 

  return (
    <>
      <Header/>
        <main>
          <Card/>
            <section className='recommended-destination-div'>
              <div className='recommended-destination-div2'>
                <h2>Recommended Destination</h2>
                <Button2 texto="View More"></Button2>
              </div>
              <div className='recommended-destination-div3'>
                <Banner></Banner>
                <Banner></Banner>
                <Banner></Banner>
              </div>
            </section>
         
        </main>
      
    </>
  )
}

export default App
