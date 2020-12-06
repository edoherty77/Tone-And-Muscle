import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function SuccessPics({ beforePic, afterPic }) {
  return (
    <div className="successLeft">
      <div className="bgDiv">
        <img
          className="beforePic"
          src={beforePic}
          width="225px"
          height="375px"
        />
        <img className="afterPic" src={afterPic} width="225px" height="375px" />
      </div>
    </div>
  )
}
