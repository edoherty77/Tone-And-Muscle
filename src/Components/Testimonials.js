import React, { useState } from 'react'

import Player from './Player'
import 'react-responsive-modal/styles.css'

import colors from '../config/colors'
import Grid from '@material-ui/core/Grid'
import Testimonial from './Testimonial'
import SuccessPics from './SuccessPics'

const Testimonials = () => {
  //Hook for modal state
  const [isOpen, setOpen] = useState(false)

  //Open and close functions for modals
  const onOpenModal = () => {
    setOpen(true)
  }
  const onCloseModal = () => {
    setOpen(false)
  }
  return (
    <section id="testies" className="testimonials">
      <Grid container spacing={1}>
        <Grid item xs={12} lg={5}>
          <SuccessPics
            beforePic={'/images/Mike-LgBef.jpg'}
            afterPic={'/images/Mike-LGAft.png'}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Testimonial
            name={'Mike Schena'}
            story={
              "My whore of a wife and I have been members of the Swinger's Fitness Club since September 2012. It wasn’t until January of this year that I decided to offer my wife to a personal trainer, Pat. My wife and I had tried 'personal training' at a different gym in the past, but were not happy with the trainers that we had. As you can imagine, I was skeptical to try it again due to our past experiences. Anyway, we all fucked and now my wife is pregrant with Pats child. 5 stars-Would have Pat get my wife pregnant again."
            }
            onClick={onOpenModal}
          />
          <Player
            url="videos/MikeSchena.mp4"
            open={isOpen}
            onClose={onCloseModal}
          />
        </Grid>

        <Grid item xs={12} lg={5}>
          <SuccessPics
            beforePic={'/images/Mike-LgBef.jpg'}
            afterPic={'/images/Mike-LGAft.png'}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Testimonial
            name={'Mike Schena'}
            story={
              "My whore of a wife and I have been members of the Swinger's Fitness Club since September 2012. It wasn’t until January of this year that I decided to offer my wife to a personal trainer, Pat. My wife and I had tried 'personal training' at a different gym in the past, but were not happy with the trainers that we had. As you can imagine, I was skeptical to try it again due to our past experiences. Anyway, we all fucked and now my wife is pregrant with Pats child. 5 stars-Would have Pat get my wife pregnant again."
            }
            onClick={onOpenModal}
          />
          <Player
            url="videos/MikeSchena.mp4"
            open={isOpen}
            onClose={onCloseModal}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <SuccessPics
            beforePic={'/images/Mike-LgBef.jpg'}
            afterPic={'/images/Mike-LGAft.png'}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Testimonial
            name={'Mike Schena'}
            story={
              "My whore of a wife and I have been members of the Swinger's Fitness Club since September 2012. It wasn’t until January of this year that I decided to offer my wife to a personal trainer, Pat. My wife and I had tried 'personal training' at a different gym in the past, but were not happy with the trainers that we had. As you can imagine, I was skeptical to try it again due to our past experiences. Anyway, we all fucked and now my wife is pregrant with Pats child. 5 stars-Would have Pat get my wife pregnant again."
            }
            onClick={onOpenModal}
          />
          <Player
            url="videos/MikeSchena.mp4"
            style={{ overlay: { outline: 0 } }}
            open={isOpen}
            onClose={onCloseModal}
            outline="0"
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default Testimonials
