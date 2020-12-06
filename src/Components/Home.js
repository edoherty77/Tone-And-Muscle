import React from 'react'

import '../Styles/styles.css'
import Grid from '@material-ui/core/Grid'
const Home = () => {
  const ColoredLine = () => (
    <hr
      style={{
        borderColor: '#7ba0ca',
        width: '90%',
        marginBottom: 40,
      }}
    />
  )
  return (
    <section id="landing" className="home">
      <Grid container className="home-div">
        <Grid item xs={12}>
          <h2 className="home-h1">
            A tailored coaching method that creates lasting results
          </h2>
        </Grid>

        <ColoredLine />
        <Grid item xs={0} sm={0} md={12} lg={12} xl={12}>
          <h2 className="home-h2">
            Individually prescribed plans, periodized for sustainability and
            delivered through constant connection-based coaching
          </h2>
        </Grid>
        <ColoredLine />
        <Grid xs={12}>
          <div className="home-btn-div">
            <button className="home-btn">
              <a>Coaching</a>
            </button>
            <button className="home-btn">
              <a>Free Content</a>
            </button>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
