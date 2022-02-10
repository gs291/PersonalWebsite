import {Container} from '@mui/material';
import {styled} from '@mui/material/styles';

import AboutMe from '../components/index/AboutMe';
import Projects from '../components/project/Projects';
import TitleDivider from '../components/title/TitleDivider';
import FixedDivider from '../components/divider/FixedDivider';
import Experiences from '../components/experience/Experiences';


const IndexContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  margin-bottom: 50px;
`;

export default function Home() {

    return (
        <>
            <FixedDivider width={100} />
            <Container maxWidth="lg">
                <IndexContainer>
                    <TitleDivider title="About Me"/>
                    <AboutMe />
                </IndexContainer>
                <IndexContainer>
                    <TitleDivider title="Experience"/>
                    <Experiences />
                </IndexContainer>
                <IndexContainer>
                    <TitleDivider title="Projects"/>
                    <Projects />
                </IndexContainer>
            </Container>
        </>
    )
}
