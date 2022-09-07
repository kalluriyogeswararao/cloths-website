import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-bg-container">
          <div className="details-container">
            <h1 className="main-heading">Clothes That Get You Noticed</h1>
            <p className="description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time Clothes have always been a marker of the
              era and we are in a revolution. Your Fashion makes you been seen
              and heard that way you are. So, celebrate the reason new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="cloths-image"
          />
        </div>
      </div>
    )
  }
}

export default Home
