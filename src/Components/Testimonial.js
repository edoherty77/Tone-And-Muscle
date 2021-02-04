import React from 'react'
// import '../Styles/styles.css'
import Button from './Button'
import Player from './Player'

export default function Testimonial({ name, story, open, onClose, url }) {
  return (
    <div className="successLeft">
      <h2 className="storyName">{name}</h2>
      <div className="storyText">{story}</div>
      <Player url={url} open={open} onClose={onClose} />
    </div>
  )
}
