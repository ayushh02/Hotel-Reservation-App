import React from 'react'
import "./featuredProperties.css"
const FeaturedProperties = () => {
  return (
    <div className='fp'>

        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Old Town, Poland, Kraków</span>
        <span className="fpPrice">₹ 30,852</span>
        <div className="fpRating">
        <button>8.7</button>
        <span>Excellent</span>
        </div>
        </div>

        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
        <span className="fpPrice">₹ 15,339</span>
        <div className="fpRating">
        <button>8.8</button>
        <span>Excellent</span>
        </div>
        </div>

        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">The Tower of London</span>
        <span className="fpCity">City of London, United Kingdom
</span>
        <span className="fpPrice">₹ 78,661</span>
        <div className="fpRating">
        <button>9.5</button>
        <span>Wonderful</span>
        </div>
        </div>

        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=73f8c029827076805ee781cdf818bb5e5e9b963227d74e4ebe071f3564ae4423&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">The Sloane Club</span>
        <span className="fpCity">Kensington and Chelsea</span>
        <span className="fpPrice">₹ 42,886</span>
        <div className="fpRating">
        <button>9.0</button>
        <span>Wonderful</span>
        </div>
        </div>

    </div>
  )
}

export default FeaturedProperties
