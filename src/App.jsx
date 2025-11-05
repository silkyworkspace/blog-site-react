import './App.css'
import Footer from './components/Footer'
import MainArea from './components/MainArea'

function App() {

  return (
    <>
      <header>
        <h1>BAMOS DESIGN</h1>
        <div>
          <button className='hamburger'>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <MainArea />
      <Footer />
    </>
  )
}

export default App
