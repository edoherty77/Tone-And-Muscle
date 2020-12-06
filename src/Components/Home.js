import React from 'react'

import '../Styles/styles.css'

const Home = () => {
  return (
    <section id="home">
      <div id="home-div">
        <h2 id="home-h1">
          A tailored coaching method that creates lasting results
        </h2>

        <h2 id="home-h2">
          Individually prescribed plans, periodized for sustainability and
          delivered through constant connection-based coaching
        </h2>

        <div id="home-btn-div">
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
