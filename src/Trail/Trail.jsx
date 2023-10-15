import React from 'react'
import './Trail.scss'
import Screenshot from '../Images/screenshot.png'
const Trail = () => {
  return (
    <div className='trail-main-container'>
        <div className="trail-container">
            <div className="trail-components">
                <div className="trail-header">
                Ready to clear the path to perfect communication?
                </div>
                <div className="trail-list">
                    <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
  <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <div className="list-text">30 days free trail</div>
                    </div>
                    <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
  <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <div className="list-text">Cancel at anytime</div>
                    </div>
                    <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
  <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <div className="list-text">Access to all features </div>
                    </div>
                    <div className="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
  <path d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z" stroke="#175CD3" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <div className="list-text">Peronalized onboarding</div>
                    </div>
                </div>
                <div className="trail-buttons">
                    <div className="btn-5">Talk to sales</div>
                    <div className="btn-6">Start your free trail</div>
                </div>
            </div>
            <div className="trail-image">
                <img  className ='img' src={Screenshot} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Trail