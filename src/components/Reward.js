import React from 'react'
import food from '../images/food14.jpg'
import delivered from '../images/delivered.png'
import { Fragment } from 'react/cjs/react.production.min'


function Reward() {
  return (
      <Fragment>
  <div className='reward'> 
     <h2 className="header-section">How To Order</h2>
        <img className='banner-second-img' src={delivered} />
    </div>
    <div className='banner-second' style={{
            backgroundImage: `url(${food})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
        }}>
            <div className='banner-second-inner'>
            <h3>FREE DELIVERY</h3>
            <p>Victoria Island</p>
            
            <h3>REFER AND EARN</h3>
            <p>Earn up to 100k every month</p>

            <h3>Cashback Rewards</h3>
            </div>
        </div>
    </Fragment>
  )
}

export default Reward