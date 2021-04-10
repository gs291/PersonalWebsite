import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import SplashBackground from "../background/SplashBackground";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import DarkMode from "./DarkMode";

const IntroductionContainer = styled.header`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  background-color: ${props => props["data-dm"] ? siteColors.background.main.dark : siteColors.background.main.light};
  min-height: 90vh;
  position: relative;
  
`;

const DarkModeContainer = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: ${props => props["data-m"] ? 10 : 30}vw;
`;

const TextContainer = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  
  width: 100%;
  height: 100%;
  padding: 0 ${props => props["data-m"] ? 0 : "5%"};
  padding-top: 5rem;
  transition: 0.3s;
`;


export default function Introduction({className}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <IntroductionContainer className={className} data-dm={darkMode}>
                <SplashBackground />
                <TextContainer data-m={mobile}>
                    {mobile ? (
                        <>
                            <Typography variant="h2" component="h1">
                                Hi!
                            </Typography>
                            <Typography variant="h2" component="h1">
                                I'm Gregory Sanchez!
                            </Typography>
                        </>
                    ) : (
                        <Typography variant="h2" component="h1">
                            Hi! I'm Gregory Sanchez!
                        </Typography>
                    )}
                    <Typography variant="h5">
                        A Full Stack Developer
                    </Typography>
                </TextContainer>
                <DarkModeContainer data-m={mobile}>
                    <DarkMode />
                </DarkModeContainer>
            </IntroductionContainer>
        </>
    );
}