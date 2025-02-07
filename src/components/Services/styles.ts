import styled from "styled-components";

export const ServicesSection = styled.section`
    width: 100%;
    padding: 20px 60px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: space-between;
    align-items: end;

    @media screen and (max-width: 768px) {
        padding: 40px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 60px;
    }
`
export const ServicesLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const ServicesRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: space-between;
    align-items: center;
    max-width: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        gap: 40px;

        h2 {
            font-size: 1.3em;
        }
    }
`

export const ServicesList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    justify-content: left;
    align-items: flex-start;
    font-size: 1.1em;
    width: 100%;

    svg {
        font-size: 1.2em;
        color: ${props => props.theme.colors.red};
    }

    @media screen and (max-width: 768px) {
        font-size: 1em;
        justify-content: space-between;
        align-items: center;

        span {
            width: 100%;
            text-align: left;
            display: flex;
            gap: 15px;
            align-items: center;

            svg {
                width: 35px;
            }
        }
    }
`
