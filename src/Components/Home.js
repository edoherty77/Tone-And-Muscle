import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

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
          <h2 className="home-h1">Find Your New Prime </h2>
        </Grid>

        <ColoredLine />
        <Grid item xs={0} sm={0} md={12} lg={12} xl={12}>
          <h2 className="home-h2">
            A tailored, online coaching experience for former athletes looking
            to regain strength, energy levels, and confidence in their bodies
          </h2>
        </Grid>
        <ColoredLine />
        <Grid xs={12}>
          <div className="home-btn-div">
            <a
              href="https://www.facebook.com/profile.php?id=100007385869431"
              className="social-a"
            >
              <img src="images/fb.png" className="social-pic" />
              {/* <FaFacebook className="fb-i" /> */}
            </a>
            <a
              href="https://www.instagram.com/yogamatpat/"
              className="social-a"
            >
              <img src="images/insta.png" className="social-pic" />
              {/* <FaInstagramSquare className="social-i" /> */}
            </a>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
