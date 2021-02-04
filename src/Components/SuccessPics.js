import React from 'react'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'

export default function SuccessPics({ beforePic, afterPic, onClick, name }) {
  return (
    <div className="successRight">
      <div className="bgDiv">
        <img
          className="beforePic"
          src={beforePic}
          width="200px"
          height="375px"
        />
        <img className="afterPic" src={afterPic} width="200px" height="375px" />
      </div>
      <div className="buttonDiv">
        <FontAwesomeIcon
          className="iconBtn"
          onClick={onClick}
          icon={faPlayCircle}
          size="5x"
        />
      </div>
    </div>
  )
}
