import {Container} from "@material-ui/core";

import AboutMe from "../components/page/AboutMe";
import Projects from "../components/project/Projects";
import TitleDivider from "../components/title/TitleDivider";

export default function Home() {
    return (
        <>
            <Container maxWidth="md">
                <TitleDivider title="About Me"/>
                <AboutMe />
                <TitleDivider title="Projects"/>
                <Projects />
            </Container>
        </>
    )
}
