import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import colors from '../config/colors'

// We can inject some CSS into the DOM.

const styles = {
  button: {
    background: 'linear-gradient(45deg, #7AAEEA 10%, #49688C 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    width: 'fit-content',
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}

function ClassNames(props) {
  return (
    <Button onClick={props.onClick} className={props.classes.button}>
      {props.children ? props.children : 'class names'}
    </Button>
  )
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ClassNames)
