import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Logo />
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <MobileNav>
                    <Icon id="shopping-bag" strokeWidth={1} />
                    <Icon id="search" strokeWidth={1} />
                    <Menu onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" strokeWidth={1} />
                    </Menu>
                </MobileNav>
                <Side />
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    overflow-x: auto;
    overflow-y: hidden;
`;

const Nav = styled.nav`
    display: flex;
    gap: clamp(1rem, 4.3vw - 1.5rem, 3.6rem);
    margin: 0px 48px;

    @media ${QUERIES.tablet} {
        display: none;
    }
`;

const MobileNav = styled.div`
    display: none;
    margin-left: auto;

    @media ${QUERIES.tablet} {
        display: flex;
        gap: 40px;
        justify-content: space-between;
    }
`;

const Menu = styled.button`
    border: none;
    background: none;
`;

const Side = styled.div`
    flex: 1;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

export default Header;
