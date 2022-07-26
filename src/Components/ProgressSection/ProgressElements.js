import styled from 'styled-components'

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HeaderContainer = styled.div`
  background-color: #f1f6fc;
  margin: 90px auto 60px;
  width: 60%;
  height: 40px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1020px) {
    margin: 70px auto 50px;
    width: 70%;
  }

  @media screen and (max-width: 825px) {
    width: 85%;
  }

  @media screen and (max-width: 545px) {
    width: 90%;
  }

  @media screen and (max-width: 470px) {
    height: 97px;
  }
`

export const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transform: translateY(-30px);
  width: 80%;

  @media screen and (max-width: 1588px) {
    transform: translateY(-40px);
  }

  @media screen and (max-width: 1020px) {
    width: 85%;
  }

  @media screen and (max-width: 700px) {
    letter-spacing: 0.1em;
    font-size: 40px;
    width: 100%;
  }
`

export const Photos = styled.div`
    display: flex;
    flex-direction: 'row';
    max-width: 70%;

    @media screen and (max-width: 1200px) {
        max-width: 85%;
    }
    @media screen and (max-width: 850px) {
        max-width: 95%;
    }
`

export const PhotoContainer = styled.div`
    display: flex;
    margin: 15px 10px;

    @media screen and (max-width: 900px) {
        margin: 10px 5px;
    }
    @media screen and (max-width: 500px) {
        margin: 7px 0px;
    }
`

export const Photo = styled.img`
    height: auto;
    width: 100%;
`