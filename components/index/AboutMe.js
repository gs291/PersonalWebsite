import Image from 'next/image';
import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import Card from "../card/Card";
import PDF from '../icon-links/PDF';
import GitHub from '../icon-links/GitHub';
import Twitter from '../icon-links/Twitter';
import LinkedIn from '../icon-links/LinkedIn';
import Polywork from '../icon-links/Polywork';
import Instagram from '../icon-links/Instagram';
import profilePic from '../../public/about.jpeg';
import {getMobile} from '../../lib/redux/selectors';
import ContactMeButton from '../button/ContactMeButton';
import {globalOptions} from '../../lib/utils/emotionStyled';


const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 30px;
`;

const ImageWrapper = styled('div')`
  position: relative;

  width: 300px;
  height: 300px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled(Typography)`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Text = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.palette.primary.main};
`;

const ContactText = styled(Typography, globalOptions)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.palette.primary.main};
`;

const EducationText = styled(Typography)`
  margin-top: 10px;
  font-size: 1.15em;
`;

const SocialsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 20px;
  justify-content: center;
  align-items: end;
`;

const PDFContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PDFText = styled(Typography)`
  font-size: 1rem;
`;

export default function AboutMe({setOpenModal}) {
    const mobile = useSelector(getMobile);

    function get_years_since_the_start() {
        const today = new Date();
        const start_of_cs = new Date("2015-01-01");

        const diff = Math.floor(today.getTime() - start_of_cs.getTime());
        const day = 1000 * 60 * 60 * 24;

        const days = Math.floor(diff/day);
        const months = Math.floor(days/31);
        const years = Math.floor(months/12);

        return years
    }

    return (
        <>
            <Card>
                <ImageContainer>
                    <ImageWrapper>
                        <StyledImage
                            src={profilePic}
                            quality={100}
                            alt="Picture of Gregory Sanchez"
                            layout="fill"
                            priority
                        />
                    </ImageWrapper>
                </ImageContainer>
                <Text variant="h4">
                    Full Stack Developer with {get_years_since_the_start()} years of Computer Science experience
                </Text>
                <Text variant="h5">
                    Vast knowledge in Web, Mobile, Porgram and Hardware Development.
                </Text>
                <Title variant={mobile ? 'h6' : 'h5'}>
                    Education
                </Title>
                <ul>
                    <li>
                        <EducationText variant="body1">
                            B.S. Computer Science, Oregon State University (2016-2020)
                        </EducationText>
                        <EducationText variant="body1">
                            Cumulative GPA: 3.85
                        </EducationText>
                        <EducationText variant="body1">
                            Honors: Summa Cum Laude
                        </EducationText>
                    </li>
                </ul>
                <ContactText variant="body1">
                    Contact Me for coding inquires or anything Computer Science related!
                </ContactText>
                <ContactMeButton setOpenModal={setOpenModal}/>
                <SocialsContainer>
                    <LinkedIn href="https://www.linkedin.com/in/gs291" />
                    <GitHub href="https://github.com/gs291" />
                    <PDFContainer>
                        <PDFText variant="h6">
                            Resume
                        </PDFText>
                        <PDF href="gregory_sanchez_website_resume.pdf" />
                    </PDFContainer>
                    <Instagram href="https://www.instagram.com/gregory_sanchez/" />
                    <Twitter href="https://twitter.com/GS_291" />
                </SocialsContainer>
            </Card>
        </>
    );
}