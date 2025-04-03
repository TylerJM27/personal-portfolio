import styled from "styled-components";

const Card = styled.div`
    width: 330px;
    height: 550px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.9s ease-in-out;
    &:hover {
        transform: translateY(-10px) scale(1.1);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
        height: auto;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
    border: 1px solid white;
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    margin-top: 8px;
    max-width: 100%;
    max-height: 65px;
    overflow: hidden;
    transition: max-height 0.9s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0.8;

    ${Card}:hover & {
        max-height: 500px;
        opacity: 1;
        overflow: visable;
    }
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.card};
`;

const WebsiteButtons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 16px;
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

const ProjectCard = ({ project }) => {
    return (
        <Card>
            <Image src={project.image} />
            <WebsiteButtons>
                <WebsiteButton href={project.github} target="_blank">
                    View Source Code
                </WebsiteButton>
                <WebsiteButton href={project.webapp} target="_blank">
                    View Live Demo
                </WebsiteButton>
            </WebsiteButtons>
            <Tags>
                {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img} />
                ))}
            </Members>
        </Card>
    );
};

export default ProjectCard;
