import {Container} from '@mui/material';

import AboutMe from '../components/page/AboutMe';
import Projects from '../components/project/Projects';
import TitleDivider from '../components/title/TitleDivider';
import FixedDivider from '../components/divider/FixedDivider';

export default function Home() {

    return (
        <>
            <FixedDivider width={100} />
            <Container maxWidth="md">
                <TitleDivider title="About Me"/>
                <AboutMe />
                <TitleDivider title="Projects"/>
                <Projects />
            </Container>
        </>
    )
}
