import styled from 'styled-components'
import { Link } from 'react-scroll'

import colors from '../config/colors'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? colors.red : 'white')};
  /* background: ${({ primary }) => (primary ? '#E6EA7A' : 'white')}; */
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#ffffff')};
  font-size: 12px;
  /* font-size: ${({ fontBig }) => (fontBig ? '12px' : '16px')}; */
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: all 0.2s ease-in-out; */
  height: 20px;
  width: 105px;
  text-indent: 0;
  /* z-index: 0; */

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ffffff' : '#7aaeea')};
  } */
`
