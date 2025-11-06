import './App.css'
import Footer from './components/Footer'
import MainArea from './components/MainArea'
import LogoImg from './assets/images/logo_black.svg'
import LogoImgWhite from './assets/images/logo_white.svg'
import { menuList } from './components/menuList'
import { useEffect, useState } from 'react'

function App() {
  // ハンバーガーメニューのstate
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // isMenuOpenの更新関数
  const hamToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log({ isMenuOpen })
  }

  useEffect(() => {
    // メニューが開いている間はスクロールを禁止
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // クリーンアップ（コンポーネントがアンマウントされたとき用）
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header>
        <div className="wrapper">
          <h1 className='headerLogo'>
            <img src={isMenuOpen ? LogoImgWhite : LogoImg} alt="bamos-design" />
          </h1>

          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={hamToggleClick}>
            <span className='plus'>
              <span></span>
              <span></span>
            </span>
            <span className='menuText'>
              {isMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
        {/* ドロワーメニュー */}
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
