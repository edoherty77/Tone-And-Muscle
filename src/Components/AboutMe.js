import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { Grid } from '@material-ui/core'
import Button from './Button'
import '../Styles/styles.css'

const AboutMe = () => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  return (
    <section id="about" className="about-me">
      <Grid
        container
        className="about-container"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={6} className="about-text-div">
          <p>
            I created the Tone & Muscle Academy because I knew people were
            struggling. I knew people were confused on what to eat and how to
            exercise to create long lasting physiques they were proud of. With
            so much information and options in the market, I saw that people
            were confused, I wanted to provide people with easily implementable
            strategies and constant support from beginning to the end of their
            journey. Setting goals along the way and celebrating small wins is
            what has created a positive culture in the TMA community.
          </p>
          <Button onClick={onOpenModal}>More About Me</Button>
        </Grid>
        <Grid item xs={12} md={6} className="about-pic-div">
          <img className="about-pic" src="images/pat-photo3.jpg" alt="" />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={onCloseModal}
        // classNames={{ overlay: { background: 'black' } }}
        // styles={{
        //   overlay: { background: 'rgb(0 0 0 / 45%)', outline: 0 },
        //   modal: { background: 'rgb(0 0 0 / 55%)', outline: 0 },
        //   closeButton: { background: 'white', outline: 0, borderRadius: 25 },
        // }}
        // style={{ overlay: 0 }}
        // center
        // outline="0"
      >
        <p>
          <span className="bold">Growing up as an athlete</span> I spent a lot
          of my time either on the field or on the mat. Playing sports was my
          passion, both scholastic and recreational. From playing dodgeball in
          elementary school to wrestling in college, I have always thrived in{' '}
          <span className="bold">competitive situations</span> that require
          skill, strength and speed.
        </p>
        <p>
          I always managed to stay on the field and give 100% no matter what
          sport or time of year I competed in. However, tearing my meniscus in
          my right knee during a college wrestling tournament would change that.
          It was the beginning of a long line of
          <span className="bold">injuries that plagued me</span> over the next 4
          years.
        </p>
        <p>
          I came out of college with a degree in economics but had very little
          interest to do anything besides fix my body. So I switched fields and
          began studying weight training, pilates, yoga and nutrition.{' '}
          <span className="bold">After years of trial and error</span> in the
          gym and the kitchen I began to fix my injuries one by one while
          developing a sound nutrition regimen.
        </p>
        <p>
          Over time I built a body that not only looks great, but{' '}
          <span className="bold">can handle anything</span> I want to put it
          through. I have created a training foundation that stays in my
          schedule whether I’m training at home or the gym. And now, I have
          designed a coaching program for former athletes to do the same.
        </p>
        <p>
          I created the Tone & Muscle Academy because I knew people were
          struggling. I knew people were confused on what to eat and how to
          exercise to create long lasting physiques they were proud of. With so
          much information and options in the market, I saw that people were
          confused, I wanted to provide people with easily implementable
          strategies and constant support from beginning to the end of their
          journey. Setting goals along the way and celebrating small wins is
          what has created a positive culture in the TMA community. "I created
          Tone & Muscle to help people see that “dieting” results in more than
          just weight loss. I show them that it also brings a{' '}
          <span className="bold">newfound energy</span> to their day in which
          they have never experienced. Tone & Muscle teaches people that
          “exercising” is not just working up a sweat so they can look good in
          the mirror, but rather a{' '}
          <span className="bold">journey of strength and mobility</span> that
          gives them the freedom to move like they were a kid again."
        </p>
        <p>
          So if you find that you feel{' '}
          <span className="bold">lost or stuck</span> and need to start moving
          in the other direction, I’m here to help. I’ll help you skip the 10
          years of trial and error I went through so that you can begin to enjoy
          not just the way you look but also the activities you used when you
          were on the field or court.
        </p>
      </Modal>
    </section>
  )
}

export default AboutMe
