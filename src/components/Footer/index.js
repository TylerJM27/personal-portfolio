import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    background: linear-gradient(
        100.26deg,
        rgba(0, 102, 255, 0.05) 42.33%,
        rgba(150, 0, 225, 0.05) 127.07%
    );
`;

const FooterWrapper = styled.footer`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const WebsiteButton = styled.a`
    z-index: 9999;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 50%;
    max-width: 110px;
    text-align: center;
    padding: 14px 0;
    color: ${({ theme }) => theme.white};
    border-radius: 10px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 300;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
`;

const Copyright = styled.p`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.soft2};
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Tyler J. Miller</Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon
                        href={Bio.linkedin || "#"}
                        target="display"
                    >
                        <LinkedInIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.github || "#"} target="display">
                        <GitHubIcon />
                    </SocialMediaIcon>
                </SocialMediaIcons>
                {/* <WebsiteButton href={Bio.github} target="_blank">
                    See Code on Github
                </WebsiteButton> */}
                <Copyright>
                    &copy; 2025 Tyler Miller. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
