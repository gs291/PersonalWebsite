import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import Card from "../card/Card";
import GitHub from '../icon-links/GitHub';
import Twitter from '../icon-links/Twitter';
import LinkedIn from '../icon-links/LinkedIn';
import Instagram from '../icon-links/Instagram';
import {getMobile} from '../../lib/redux/selectors';


const Title = styled(Typography)`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Text = styled(Typography)`
  font-size: 1.25em;
  margin-bottom: 10px;
`;

const EducationText = styled(Typography)`
  font-size: 1.15em;
`;

const SocialsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 0 20px;
  justify-content: center;
  align-items: center;
`;

export default function AboutMe() {
    const mobile = useSelector(getMobile);

    return (
        <>
            <Card>
                <Text variant="body1">
                    I'm a full stack web developer with 7 years of computer science experience!
                    I've worked and developed in many areas of Computer Science including program, web, android and hardware development.
                </Text>
                <Text variant="body1">
                    I was introduced to technology at a very early age.
                    Since then I have been fond of technology which then led to my passion of software development.
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
                    </li>
                </ul>
                <SocialsContainer>
                    <Twitter href="https://twitter.com/GS_291" />
                    <Instagram href="https://www.instagram.com/gregory_sanchez/" />
                    <LinkedIn href="https://www.linkedin.com/in/gregory-sanchez-05b211159" />
                    <GitHub href="https://github.com/gs291" />
                </SocialsContainer>
            </Card>
        </>
    );
}