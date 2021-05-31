import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import { ApplyContainer } from './BioElements'
import Apply from '../Apply'
import Button from '../Button'
import '../../Styles/styles.css'

const BioDialog = ({ Transition, open, onClose }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        classes={{ root: 'bio-dialog' }}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle classes={{ root: 'bio-dialog-title' }}>
          Pat Doherty
        </DialogTitle>
        <DialogContent dividers={true} classes={{ root: 'bio-dialog-content' }}>
          <DialogContentText>
            {' '}
            <span className="bold">Growing up as an athlete</span> I spent a lot
            of my time either on the field or on the mat. Playing sports was my
            passion, both scholastic and recreational. From playing dodgeball in
            elementary school to wrestling in college, I have always thrived in{' '}
            <span className="bold">competitive situations</span> that require
            skill, strength and speed. I always managed to stay on the field and
            give 100% no matter what sport or time of year I competed in.
          </DialogContentText>
          <DialogContentText>
            However, tearing my meniscus in my right knee during a college
            wrestling tournament would change that. It was the beginning of a
            long line of
            <span className="bold"> injuries that plagued me</span> over the
            next 4 years. I came out of college with a degree in economics but
            had very little interest to do anything besides fix my body. So I
            switched fields and began studying weight training, pilates, yoga
            and nutrition.
          </DialogContentText>
          <DialogContentText>
            <span className="bold">After years of trial and error</span> in the
            gym and the kitchen I began to fix my injuries one by one while
            developing a sound nutrition regimen. Over time I built a body that
            not only looks great, but{' '}
            <span className="bold">can handle anything</span> I want to put it
            through. I have created a training foundation that stays in my
            schedule whether I’m training at home or the gym.{' '}
          </DialogContentText>

          <DialogContentText>
            And now, I have designed a coaching program for former athletes to
            do the same. I created the{' '}
            <span className="bold">Tone & Muscle Academy</span> because I knew
            people were <span className="bold">struggling</span>. With so much
            information and options in the market, I knew people were confused
            on <span className="bold">what to eat</span> and{' '}
            <span className="bold">how to exercise </span>
            to create long lasting physiques they were proud of."
          </DialogContentText>
          <DialogContentText>
            I wanted to provide people with{' '}
            <span className="bold">easily implementable strategies</span> and{' '}
            <span className="bold">constant support </span>from the beginning to
            the end of their journey. Setting{' '}
            <span className="bold">goals</span> along the way and celebrating
            small <span className="bold">wins</span> is what has created a
            positive culture in the <span className="bold">TMA community</span>.
          </DialogContentText>
          <DialogContentText>
            I created Tone & Muscle to help people see that “dieting” results in
            more than just weight loss. I show them that it also brings a
            <span className="bold"> newfound energy</span> to their day in which
            they have never experienced. Tone & Muscle teaches people that
            “exercising” is not just working up a sweat so they can look good in
            the mirror, but rather a
            <span className="bold"> journey of strength and mobility</span> that
            gives them the freedom to move like they were a kid again.
          </DialogContentText>
          <DialogContentText classes={{ root: 'last-p' }}>
            So if you find that you feel{' '}
            <span className="bold">lost or stuck</span> and need to start moving
            in the other direction, I’m here to help. I’ll help you skip the 10
            years of trial and error I went through so that you can begin to
            enjoy not just the way you look but also the activities you used
            when you were on the field or court.
          </DialogContentText>
          <ApplyContainer>
            <Apply />
          </ApplyContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default BioDialog
