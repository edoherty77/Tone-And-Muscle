import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";

import {
  FormContainer,
  FormTitle,
  Form,
  ErrorMessage,
  FormGroup,
  Label,
  SubLabel,
  Input,
  TextArea,
  Select,
  Option,
  Checkbox,
  ApplyContainer,
  ApplyBtn,
  SubmitMessage,
} from "./FormElements";

const FormSection = () => {
  const [submitMessage, setSubmitMessage] = useState("");
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
      obstacle: "",
      important: "",
      investment: "",
      commit: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("* This field is required"),
      lastName: Yup.string().required("* This field is required"),
      age: Yup.number().required("* This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("* This field is required"),
      phoneNumber: Yup.number().required("* This field is required"),
      social: Yup.string().required("* This field is required"),
      occupation: Yup.string().required("* This field is required"),
      fitness: Yup.string().required("* This field is required"),
      obstacle: Yup.string().required("* This field is required"),
      commit: Yup.bool().oneOf([true], "* This field is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_ufnp7um",
          "template_9xhl9xf",
          values,
          "DT43FVbGpAf3j6KAH"
        )
        .then(
          function (response) {
            setSubmitMessage("success");
            resetForm();
          },
          function (error) {
            setSubmitMessage("failed");
          }
        );
    },
  });
  return (
    <FormContainer id="form">
      <FormTitle>TMA Application</FormTitle>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label>First Name *</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>Last Name *</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>Age *</Label>
          <Input
            type="number"
            id="age"
            name="age"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <ErrorMessage>{formik.errors.age}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>Phone Number *</Label>
          <Input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>Social Media Platform/Name *</Label>
          <Input
            type="text"
            id="social"
            name="social"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.social}
          />
          {formik.touched.social && formik.errors.social ? (
            <ErrorMessage>{formik.errors.social}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>What is your current occupation? *</Label>
          <Input
            type="text"
            id="occupation"
            name="occupation"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.occupation}
          />
          {formik.touched.occupation && formik.errors.occupation ? (
            <ErrorMessage>{formik.errors.occupation}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>What are your fitness goals for the next 90 days? *</Label>
          <TextArea
            type="text"
            id="fitness"
            onBlur={formik.handleBlur}
            name="fitness"
            onChange={formik.handleChange}
            value={formik.values.fitness}
          />
          {formik.touched.fitness && formik.errors.fitness ? (
            <ErrorMessage>{formik.errors.fitness}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>What has been your biggest obstacle in fitness? *</Label>
          <TextArea
            type="text"
            id="obstacle"
            onBlur={formik.handleBlur}
            name="obstacle"
            onChange={formik.handleChange}
            value={formik.values.obstacle}
          />
          {formik.touched.obstacle && formik.errors.obstacle ? (
            <ErrorMessage>{formik.errors.obstacle}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label>
            On a scale from 1-5 how important is it to you to reach these goals?
            *
          </Label>
          <SubLabel>
            1 being not important at all and a 5 being very important
          </SubLabel>
          <Select
            id="important"
            name="important"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.important}
          >
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
          </Select>
          {/* {formik.touched.important && formik.errors.important ?  <ErrorMessage>{formik.errors.important}</ErrorMessage> : null} */}
        </FormGroup>
        <FormGroup>
          <Label>
            On scale of 1-5 how ready are you to make a significant financial
            investment in your health & fitness? *
          </Label>
          <SubLabel>
            1 being not ready at all and a 5 being very ready to significantly
            invest for a significant goal.
          </SubLabel>
          <Select
            id="investment"
            name="investment"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.investment}
          >
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
          </Select>
          {/* {formik.touched.investment && formik.errors.investment ?  <ErrorMessage>{formik.errors.investment}</ErrorMessage> : null} */}
        </FormGroup>
        <FormGroup>
          <Label>Checkbox *</Label>
          <SubLabel>Are you ready to COMMIT?</SubLabel>
          <Checkbox
            type="checkbox"
            id="commit"
            name="commit"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            defaultChecked={formik.values.commit}
          />
          {formik.touched.commit && formik.errors.commit ? (
            <ErrorMessage>{formik.errors.commit}</ErrorMessage>
          ) : null}
        </FormGroup>
        <ApplyContainer>
          <ApplyBtn type="submit">Apply Here</ApplyBtn>
          {submitMessage === "success" && (
            <SubmitMessage>Form Sent Successfully!</SubmitMessage>
          )}
          {submitMessage === "failed" && (
            <SubmitMessage>
              Something went wrong. Please email Patrick at
              pat@toneandmuscle.com
            </SubmitMessage>
          )}
        </ApplyContainer>
      </Form>
    </FormContainer>
  );
};

export default FormSection;
