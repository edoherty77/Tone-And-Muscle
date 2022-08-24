import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';

import {
    FormContainer, 
    FormTitle, 
    Form,
    FormGroup,
    Label,
    Input,
    TextArea,
    ApplyContainer,
    ApplyBtn
  } from './FormElements'

const FormSection = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            phoneNumber: "",
            social: "",
            occupation: "",
            fitness: "",
            obstacle: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
          .required('* Name field is required'),
            age: Yup.string()
          .required('* Age field is required'),
            email: Yup.string().email('Invalid email address')
          .required('* Email field is required'),
            phoneNumber: Yup.string().required('* Phone number field is required')
          }),
        onSubmit: values => {
            emailjs.send('service_h2iorer', 'template_9xhl9xf', values, 'DT43FVbGpAf3j6KAH')
                .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                console.log('FAILED...', error);
            });
        }
    })
    return (
        <FormContainer>
            <FormTitle>TMA Application</FormTitle>
            <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label>First Name *</Label>
                    <Input id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} />
                    <div className={`expandable ${formik.touched.from_name && formik.errors.from_name ? 'show' : ''}`}>
                    {formik.errors.firstName}
                </div>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name *</Label>
                    <Input id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} />
                    </FormGroup>
                <FormGroup>
                    <Label>Email *</Label>
                    <Input id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                </FormGroup>
                <FormGroup>
                    <Label>Age *</Label>
                    <Input id="age" name="age" onChange={formik.handleChange} value={formik.values.age} />
                </FormGroup>
                <FormGroup>
                    <Label>Phone Number *</Label>
                    <Input id="phoneNumber" name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber} />
                </FormGroup>
                <FormGroup>
                    <Label>Social Media Platform/Name *</Label>
                    <Input id="social" name="social" onChange={formik.handleChange} value={formik.values.social} />
                </FormGroup>
                <FormGroup>
                    <Label>What is your current occupation? *</Label>
                    <Input id="occupation" name="occupation" onChange={formik.handleChange} value={formik.values.occupation} />
                </FormGroup>
                <FormGroup>
                    <Label>What are your fitness goals for the next 90 days? *</Label>
                    <TextArea id="fitness" name="fitness" onChange={formik.handleChange} value={formik.values.fitness} />
                </FormGroup>
                <FormGroup>
                    <Label>What has been your biggest obstacle in fitness? *</Label>
                    <TextArea id="obstacle" name="obstacle" onChange={formik.handleChange} value={formik.values.obstacle} />
                </FormGroup>
                <ApplyContainer>
                    <ApplyBtn type="submit">
                        Apply Here
                    </ApplyBtn>
                </ApplyContainer>
            </Form>
        </FormContainer>
    )

}

export default FormSection