import {useSelector} from "react-redux";
import {Container} from "@material-ui/core";

import AboutMe from "../components/page/AboutMe";
import siteColors from "../lib/utils/siteColors";
import {getDarkMode} from "../lib/redux/selectors";
import Projects from "../components/project/Projects";
import TitleDivider from "../components/title/TitleDivider";
import FixedDivider from "../components/divider/FixedDivider";

export default function Home() {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <FixedDivider width={100} backgroundColor={darkMode ? siteColors.background.divider.dark : siteColors.background.divider.light}/>
            <Container maxWidth="md">
                <TitleDivider title="About Me"/>
                <AboutMe />
                <TitleDivider title="Projects"/>
                <Projects />
            </Container>
        </>
    )
}
