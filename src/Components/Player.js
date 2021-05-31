import React from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
import 'react-responsive-modal/styles.css'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import '../Styles/styles.css'

const Player = ({ name, url, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} classes={{ root: 'player-dialog' }}>
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
          url={url}
        />
      </DialogContent>
    </Dialog>
  )
}

export default Player
