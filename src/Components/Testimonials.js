import React, { useState } from 'react'

import Player from './Player'
import 'react-responsive-modal/styles.css'

import colors from '../config/colors'
import Grid from '@material-ui/core/Grid'
import Testimonial from './Testimonial'
import SuccessPics from './SuccessPics'

const text = {
  schena:
    'Mike, an ex football player and long time gym go-er started with the Tone & Muscle Academy when he decided that he wanted to finally see things change for good. While he was super strong at the some of the major lifts like squats, deadlifts, and bench press, he still wanted more. He wanted to lose the belly fat he had accumulated but still maintain all the muscle mass. Mike followed the TMA meal plans for 6 months, and a year and half later is currently still utilizing the training program. Down 60 lbs, and eating intuitively Mike is stronger all around than hes ever been.',
  conway:
    'With quarantine set in and the gyms closed Jack came into the TMA without any experience lifting weights. While he had been an athlete a lot of his life, strength training never had made its way into his routine. Jack adopted TMAs home routine and began balancing his work, newborn child, and lifting regimen while adhering to the meal plans. After 12 weeks Jack learned all about how to prioritize whole foods into his diet, lost 15 lbs, and now is stronger than hes ever been...all without ever leaving the house.',
  poplaski:
    'Kevin a former college wrestler and current entrepreneur found the TMA at a time where he was extremely busy getting his mead business off the ground. However, eating what he could when he could wasnt serving him well as he was weighing 282 and was eating foods that werent giving him the energy to train on his downtime. After adopting ideas from the TMA meal plans into his diet he learned how to prepare for the week and prioritize his work outs no matter how busy his business got. Currently at 222 lbs, Kevin is 60 lbs down from his original weight and stronger all around than hes ever been. ',
}

const Testimonials = () => {
  //Hook for modal state
  const [isMikeOpen, setMikeOpen] = useState(false)
  const [isJackOpen, setJackOpen] = useState(false)
  const [isKevinOpen, setKevinOpen] = useState(false)

  //Open and close functions for modals
  const onMikeOpen = () => {
    setMikeOpen(true)
  }
  const onJackOpen = () => {
    setJackOpen(true)
  }
  const onKevinOpen = () => {
    setKevinOpen(true)
  }

  const onMikeCloseModal = () => {
    setMikeOpen(false)
  }
  const onJackCloseModal = () => {
    setJackOpen(false)
  }
  const onKevinCloseModal = () => {
    setKevinOpen(false)
  }
  return (
    <section id="testies" className="testimonials">
      <Grid container spacing={1}>
        <Grid item xs={12} lg={5}>
          <SuccessPics
            beforePic={'/images/Mike-LgBef.png'}
            afterPic={'/images/Mike-LgAft.png'}
            onClick={() => onMikeOpen('videos/MikeSchena.mp4')}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Testimonial name={'Mike Schena'} story={text.schena} />
          <Player
            url="videos/MikeSchena.mp4"
            open={isMikeOpen}
            onClose={onMikeCloseModal}
          />
        </Grid>

        <Grid item xs={12} lg={5}>
          <SuccessPics
            beforePic={'/images/Jack-LgBef.png'}
            afterPic={'/images/Jack-LgAft.jpg'}
            onClick={() => onJackOpen('/videos/Ryan.mp4')}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Testimonial name={'Jack Conway'} story={text.conway} />
          <Player
            url="videos/Ryan.mp4"
            open={isJackOpen}
            onClose={onJackCloseModal}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <SuccessPics
            beforePic={'/images/Mike-LgBef.png'}
            afterPic={'/images/Mike-LGAft.png'}
            onClick={() => onKevinOpen('/videos/Kevin.mp4')}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Testimonial name={'Kevin Poplaski'} story={text.poplaski} />
          <Player
            url="videos/Kevin.mp4"
            style={{ overlay: { outline: 0 } }}
            open={isKevinOpen}
            onClose={onKevinCloseModal}
            outline="0"
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default Testimonials
