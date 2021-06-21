import React from 'react'
import colors from '../../config/colors'
import Button from '../Button'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
// import FormInput from '../Input'
import {
  MainContainer,
  MobileHeader,
  InfoContainer,
  InfoHeader,
  InfoText,
  FormContainer,
  Form,
  FormHeader,
  FormInput,
  MessageInput,
  IconsContainer,
  IconLink,
  ButtonContainer,
} from './ContactElements'

const ContactSection = () => {
  return (
    <MainContainer id="contact">
      <MobileHeader>Contact Me</MobileHeader>
      <InfoContainer>
        <InfoHeader>Tone & Muscle</InfoHeader>
        <InfoText style={{ fontSize: 18, fontWeight: 600 }}>
          Pat Doherty | Owner
        </InfoText>
        <InfoText>917-704-7729</InfoText>
        <InfoText>pat@toneandmuscle.com</InfoText>
        <IconsContainer>
          <IconLink
            href="https://www.instagram.com/yogamatpat/"
            target="_blank"
          >
            <InstagramIcon style={{ color: colors.primary, fontSize: 40 }} />
          </IconLink>
          <IconLink
            href="https://www.facebook.com/profile.php?id=100007385869431"
            target="_blank"
          >
            <FacebookIcon style={{ color: colors.primary, fontSize: 40 }} />
          </IconLink>
        </IconsContainer>
      </InfoContainer>
      <FormContainer>
        <FormHeader>Contact Me</FormHeader>
        <Form>
          <FormInput type="text" color="primary" placeholder="Full Name" />
          <FormInput placeholder="Email" />
          <MessageInput
            // variant="outlined"
            multiline={true}
            required={true}
            rows="4"
            placeholder="Message"
          />
          <ButtonContainer>
            <Button>Submit</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </MainContainer>
  )
}

export default ContactSection
