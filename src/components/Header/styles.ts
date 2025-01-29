import styled from "styled-components";

export const HeaderContainer = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 60px;
    backdrop-filter: blur(10px);  
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    a {
        font-size: 1.4rem;
        transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

            &:hover {
                transform: scale(1.1);
            }
    }
`