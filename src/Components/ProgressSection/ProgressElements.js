import styled from 'styled-components'

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px blue solid;
`
export const HeaderContainer = styled.div`
  background-color: #f1f6fc;
  margin: auto;
  margin-top: 90px;
  margin-bottom: 60px;
  width: 60%;
  height: 40px;

  @media screen and (max-width: 850px) {
    /* display: inline; */
    /* background-color: white; */
    margin: 40px auto;
    width: 65%;
    height: 40px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`

export const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transform: translateY(-30px);

  @media screen and (max-width: 600px) {
    letter-spacing: 0.01em;
  }

  @media screen and (max-width: 450px) {
    font-size: 35px;
  }
`

export const Photos = styled.div`
    display: flex;
    flex-direction: 'row';
    max-width: 70%;
`

export const PhotoContainer = styled.div`
    display: flex;
    margin: 15px 10px;
`

export const Photo = styled.img`
    height: auto;
    width: 100%;
`