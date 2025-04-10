import styled from "styled-components";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/Headshot.jpg";
import HeroBgAnimation from "../../HeroBgAnimation";

const HeroContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 1;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    width: 82%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }

    @media (max-width: 640px) {
        order: 1;
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-weight: 700px;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-weight: 600px;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.a`
    z-index: 9999;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;

    gap: 16px;
    @media (max-width: 960px) {
        justify-content: center;
    }
`;

const ContactButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: relative;
`;

const ContactLink = styled(motion.a)`
    margin-bottom: 0;
`;

const ContactButton = styled(motion.div)`
    position: relative;
    width: 100px;
    height: 100px;
`;

const CircleText = styled.text`
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: bold;
    fill: ${({ theme }) => theme.text_primary};
`;

const Arrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hero = () => {
    const theme = useTheme();

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>
                            Hi! I am
                            <br />
                            {Bio.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ButtonContainer>
                            <ResumeButton
                                href={Bio.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Check Resume
                            </ResumeButton>
                            <ContactButtonContainer>
                                <ContactLink
                                    href="/#contact"
                                    animate={{
                                        x: [200, 0],
                                        opacity: [0, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                    }}
                                >
                                    <ContactButton
                                        animate={{ rotate: [0, 360] }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 200 200"
                                            width="100"
                                            height="100"
                                        >
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="90"
                                                fill={theme.button}
                                            />
                                            <path
                                                id="innerCirclePath"
                                                fill="none"
                                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                            />
                                            <CircleText>
                                                <textPath href="#innerCirclePath">
                                                    Hire Now •
                                                </textPath>
                                            </CircleText>
                                            <CircleText>
                                                <textPath
                                                    href="#innerCirclePath"
                                                    startOffset="44%"
                                                >
                                                    Contact Me •
                                                </textPath>
                                            </CircleText>
                                        </svg>
                                        <Arrow>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="50"
                                                height="50"
                                                fill="none"
                                                stroke={theme.text_primary}
                                                strokeWidth="1.5"
                                            >
                                                <line
                                                    x1="7"
                                                    y1="16"
                                                    x2="18"
                                                    y2="6"
                                                />
                                                <polyline points="9 6 18 6 18 15" />
                                            </svg>
                                        </Arrow>
                                    </ContactButton>
                                </ContactLink>
                            </ContactButtonContainer>
                        </ButtonContainer>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Image src={HeroImg} alt="Hero" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default Hero;
