import React from 'react'

import '../Styles/styles.css'

const Home = () => {
  return (
    <section className="home">
      <div className="home-div">
        <h2 className="home-h1">
          A tailored coaching method that creates lasting results
        </h2>

        <h2 className="home-h2">
          Individually prescribed plans, periodized for sustainability and
          delivered through constant connection-based coaching
        </h2>

        <div className="home-btn-div">
          <button className="home-btn">
            <a>Coaching</a>
          </button>
          <button className="home-btn">
            <a>Free Content</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
