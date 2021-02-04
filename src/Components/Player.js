import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import ReactPlayer from 'react-player'
// import '../Styles/styles.css'

const Player = ({ style, url, open, onClose }) => {
  return (
    <Modal
      classNames={{ overlay: { background: 'black' } }}
      styles={{
        overlay: { background: 'rgb(0 0 0 / 45%)', outline: 0 },
        modal: { background: 'rgb(0 0 0 / 55%)', outline: 0 },
        closeButton: { background: 'white', outline: 0, borderRadius: 25 },
      }}
      style={{ overlay: 0 }}
      open={open}
      onClose={onClose}
      center
      outline="0"
    >
      <ReactPlayer
        playing="true"
        style={{ video: { overlay: 0 } }}
        controls={true}
        width="300px"
        url={url}
      />
    </Modal>
  )
}

export default Player
