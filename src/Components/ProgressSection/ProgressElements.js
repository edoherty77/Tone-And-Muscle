import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

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
  @media screen and (max-width: 485px) {
    margin: 72px auto 60px;
  }
`;

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

  @media screen and (max-width: 485px) {
    line-height: 45px;
    font-size: 35px;
    transform: translateY(-27px);
  }
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: "row";
  max-width: 70%;

  @media screen and (max-width: 1200px) {
    max-width: 85%;
  }
  @media screen and (max-width: 850px) {
    max-width: 95%;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
    margin: 0 3px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  margin: 15px 10px;

  @media screen and (max-width: 900px) {
    margin: 10px 5px;
  }
  @media screen and (max-width: 600px) {
    margin: 7px 2px;
  }
`;

export const Photo = styled.img`
  height: auto;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 10px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    margin: 20px 5px;
  }
`;

export const Text = styled.div`
  font-size: 35px;
  font-weight: 200;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const CTA = styled.div`
  font-size: 25px;
  font-weight: 200;
`;
