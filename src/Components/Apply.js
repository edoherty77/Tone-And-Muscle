import React from 'react'
import styled from 'styled-components'

const ApplyBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px 0 20px;
`

const ApplyBtnLink = styled.a`
  border-radius: 50px;
  background: #bcf97f;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

const Apply = () => {
  return (
    <ApplyBtn>
      <ApplyBtnLink
        target="_blank"
        href="https://form.jotform.com/211236844480151"
      >
        Apply Here
      </ApplyBtnLink>
    </ApplyBtn>
  )
}

export default Apply
