import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import 'react-responsive-modal/styles.css'
import ReactPlayer from 'react-player'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import '../Styles/styles.css'

const Player = ({ name, url, open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      // fullWidth={true}
      classes={{ root: 'player-dialog' }}
    >
      {/* <DialogTitle>{name}</DialogTitle> */}
      <DialogContent dividers={true} classes={{ root: 'player-container' }}>
        <FontAwesomeIcon
          className="closeIcon"
          onClick={onClose}
          icon={faTimesCircle}
          size="2x"
        />
        <ReactPlayer
          playing={false}
          className="react-player"
          playing="true"
          controls={true}
          width="100%"
          height="100%"
          // height="fit-content"
          url={url}

          // style={{ video: { width: '200px' } }}
        />
      </DialogContent>
      {/* <DialogActions>
       
      </DialogActions> */}
    </Dialog>
  )
}

export default Player
