import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { InputLabel, Input } from '@material-ui/core'

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const styles = {
  root: {
    // borderRadius: 130,
    borderColor: 'white',
    color: 'white',
    height: 30,
    width: 500,
    padding: '0px 10px',
    fontSize: 12,
    margin: '10px 0',
  },
  label: {
    textTransform: 'capitalize',
  },
}

function FormInput(props) {
  const { classes, placeholder } = props
  return (
    <Input className={[classes.root, classes.label]} placeholder={placeholder}>
      <InputLabel />
    </Input>
  )
}
FormInput.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FormInput)
