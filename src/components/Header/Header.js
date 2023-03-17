import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

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
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <DesktopNav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </DesktopNav>
                <MobileActions>
                    <UnstyledButton>
                        <Icon id="shopping-bag" strokeWidth={1} />
                        <VisuallyHidden>Open cart</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton>
                        <Icon id="search" strokeWidth={1} />
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" strokeWidth={1} />
                        <VisuallyHidden>Menu</VisuallyHidden>
                    </UnstyledButton>
                </MobileActions>
                <Filler />
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

    @media ${QUERIES.tablet} {
        border-top: 4px solid ${COLORS.gray[900]};
        justify-content: space-between;
        align-items: center;
    }

    @media ${QUERIES.phone} {
        padding: 18px 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: clamp(1rem, 4.3vw - 1.5rem, 3.6rem);
    margin: 0px 48px;

    @media ${QUERIES.tablet} {
        display: none;
    }
`;

const MobileActions = styled.div`
    display: none;

    @media ${QUERIES.tablet} {
        display: flex;
        gap: 32px;
    }

    @media ${QUERIES.phone} {
        gap: 16px;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;
    @media ${QUERIES.tablet} {
        flex: revert;
    }
`;

const Filler = styled.div`
    flex: 1;
    @media ${QUERIES.tablet} {
        display: none;
    }
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
