import React from 'react'

const ErrorMessage = ({formik}) => {
  return (
    <div className={`expandable ${formik.touched.firstName && formik.errors.firstName ? 'show' : ''}`}>
        {formik.errors.firstName}
    </div>
  )
}

export default ErrorMessage

