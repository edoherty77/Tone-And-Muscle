import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const styles = {
  root: {
    borderRadius: 130,
    border: 0,
    color: 'white',
    height: 30,
    width: 135,
    // padding: '0 30px',
    fontSize: 12,
  },
  label: {
    textTransform: 'capitalize',
  },
}

function ToggleBtn(props) {
  const { classes, onClick, marginTop, background, boxShadow } = props
  return (
    <Button
      className={classes.root}
      onClick={onClick}
      style={{ marginTop, background, boxShadow }}
    >
      {props.title}
    </Button>
  )
}
ToggleBtn.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ToggleBtn)
