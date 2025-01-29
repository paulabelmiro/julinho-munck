import { motion } from "framer-motion";
import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    background: url("/background-banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 550px;
    background-position: bottom;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        background-position: top;
        background-size: contain;
        padding: 20px 40px;
        gap: 20px;
    }
`

export const BannerTextArea = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        justify-content: center;
    }
`

export const TruckImage = styled(motion.img)`
  width: 680px;


  @media screen and (max-width: 768px) {
        width: 100%;
    }
`;