import './App.css'
import Footer from './components/Footer'
import MainArea from './components/MainArea'
import LogoImg from './assets/images/logo_black.svg'

function App() {

  return (
    <>
      <header>
        <h1><img src={LogoImg} alt="bamos-design" /></h1>
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
