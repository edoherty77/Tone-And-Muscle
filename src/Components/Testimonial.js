import React from 'react'
import { Grid } from '@material-ui/core'
import '../Styles/styles.css'
import Button from './Button'

export default function Testimonial({ name, story, onClick }) {
  return (
    <div className="successRight">
      <h2 className="storyName">{name}</h2>
      <div className="storyText">{story}</div>
      <Button onClick={onClick}>Hear {name}'s Story</Button>
    </div>
  )
}
