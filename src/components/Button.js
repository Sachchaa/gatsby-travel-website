import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#F3BC85' : '#FDB78F')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #000000;
    font-size: ${({ big }) => (big ? '20px' : '16px ')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};

    &:hover {
        background: ${({ primary }) => (primary ? '#FDB78F' : '#F3BC85')};
        transform: translateY(-2px);
    }
`