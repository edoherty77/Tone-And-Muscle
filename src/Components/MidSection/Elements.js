import styled from 'styled-components'

export const PhotoContainer = styled.div`
    position: relative;
    background-color: black;
    height: 87vh;

    @media screen and (max-width: 600px) {
        background: none;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`
export const Img = styled.div`
    height: 87vh;
    width: auto;
    position: relative;
    background-attachment: fixed;
    background-position: top 130px right 50%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 0;

    :after {
        content: '';
        background-color: rgb(0 0 0/ 35%);
        background-blend-mode: color;
        background-size: cover;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        z-index: -1;
        height: 87vh;
        width: 100%;
  }

    @media screen and (max-width: 680px) {
        background-position: top 90px right 50%;
        background-size: cover;
    }
`
