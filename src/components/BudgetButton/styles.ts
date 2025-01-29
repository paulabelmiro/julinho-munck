import styled from "styled-components";

export const BudgetButtonContainer = styled.div`
    display: flex;
    border-radius: 15px;
    background-color: ${props => props.theme.colors.red};
    padding: 8px 16px;
    text-align: center;
    width: fit-content;
    transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
        margin: auto;
        padding: 15px 30px;
        font-size: 1.1rem;
    }
`