import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    padding: 40px 60px;
    justify-content: space-between;

    @media screen and (max-width: 768px)  {
        justify-content: center;
        flex-direction: column-reverse;
        align-items: center;
        padding: 20px 40px;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
            &:hover {
                transform: scale(1.1);
            }
    }

    span, a {
        font-family: ${props => props.theme.fonts.robotoCondensed};
        font-size: 1.3rem;
        transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        display: flex;
        gap: 15px;
        align-items: center;
    }

    @media screen and (max-width: 768px)  {
        justify-content: center;
    }
`

export const SmallContainer = styled.small`
    width: 100%;
    padding: 20px 60px;
    display: flex;
    gap: 15px;
    justify-content: center;

    @media screen and (max-width: 768px)  {
        flex-direction: column;
        align-items: center;
    }
`