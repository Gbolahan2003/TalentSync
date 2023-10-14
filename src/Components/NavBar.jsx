import React from 'react'
import '../Styles/Navbar.scss'
const NavBar = () => {
  return (
    <section className='nav-container'>
        <nav>
            <div className="logo-container">
                <div className="logo-svg"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
  <path d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z" fill="#1570EF"/>
  <path d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z" fill="#53B1FD"/>
</svg></div>
                <div className="logo-text">ClearLink<strong>.</strong></div>
            </div>
            <div className="link-container">
                <div className="links">
                    <div className="link-text">Products</div>
                    <div className="link-svg"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                </div>
                <div className="links">
                    <div className="link-text">Solutions</div>
                    <div className="link-svg"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                </div>
                <div className="links">
                    <div className="link-text">Resources</div>
                    <div className="link-svg"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                </div>
                <div className="links">
                    <div className="link-text">Pricing</div>

                </div>
            </div>
            <div className="button-container">
                <button className='btn-1'>Talk to sales</button>
                <button className='btn-2'>SIgn up for free</button>
            </div>
        </nav>
    </section>
  )
}

export default NavBar