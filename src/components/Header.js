import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import { menuItems } from '../data/menuItems'
import { Button } from './Button'

const Header = () => {
    return (
        <Nav>
            <NavLogo to='/'>TRAVEL AUSTRALIA</NavLogo>
            <MobileNav />
            <NavMenu>
                {menuItems.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                ))}
            </NavMenu>
            <NavButton>
                <Button primary='true' round='true' to='/trips'>Book a flight</Button>
            </NavButton>
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    position: relative;
`

const NavLogo = styled(Link)`
    color: #D7C35A;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

`
const MobileNav = styled(FaBars)`
    display: none;
    color: #ffffff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;

        &:hover {
            color: #D7C35A;
        }
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
     }
`

const NavLink = styled(Link)`
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #D7C35A;
    }

`

const NavButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
     }
`