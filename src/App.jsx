import './App.css'
import Footer from './components/Footer'
import MainArea from './components/MainArea'
import LogoImg from './assets/images/logo_black.svg'
import { menuList } from './components/menuList'
import { useState } from 'react'

function App() {
  // ハンバーガーメニューのstate
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // isMenuOpenの更新関数
  const hamToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log({ isMenuOpen })
  }

  return (
    <>
      <header>
        <div className="wrapper">
          <h1 className='headerLogo'><img src={LogoImg} alt="bamos-design" /></h1>

          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={hamToggleClick}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav id='gNav' className={`gNav ${isMenuOpen ? "open" : ""}`}>
          <ul className='gNavMenu'>
            {menuList.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.pageLink} onClick={hamToggleClick}>{item.menuName}</a>
                </li>
              );
            })}
          </ul>
        </nav>

      </header>

      <MainArea />
      <Footer />
    </>
  )
}

export default App
