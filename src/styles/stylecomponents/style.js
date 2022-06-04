import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    font-size: 1em;
    margin-top: 8em;
    padding: 0.8em 2.3em;
    border-radius: 20px;
    border: 2px solid transparent;
    background-color: hsl(0, 0%, 95%);
    cursor: pointer;

    &:hover{
        color: hsl(0, 0%, 95%);
        background-color: rgba(0,0,0,0);
        border: 2px solid hsl(0, 0%, 95%);
    }
`;

export const SedansBtn = styled(Button)`
    color: hsl(31, 77%, 52%);
`

export const SuvsBtn = styled(Button)`
    color: hsl(184, 100%, 22%);
`

export const LuxuryBtn = styled(Button)`
    color: hsl(179, 100%, 13%);
`
