import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import SplashBackground from "../background/SplashBackground";

const IntroductionContainer = styled.header`
  color: ${siteColors.text.dark};
  background-color: ${siteColors.background.main.dark};
  min-height: 85vh;
  position: relative;
`;

const TextContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  
  width: 100%;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5rem;
`;


export default function Introduction() {
    const mobile = useSelector(getMobile);

    const TextContainer = styled.div`
      z-index: 999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      
      width: 100%;
      height: 100%;
      padding: 0 ${mobile ? 0 : "5%"};
      padding-top: 5rem;
    `;
    return (
        <>
            <IntroductionContainer>
                <SplashBackground />
                <TextContainer>
                    <Typography variant="h2" component="h1">
                        Hi! I'm Gregory Sanchez!
                    </Typography>
                    <Typography variant="h5">
                        A Full Stack Developer
                    </Typography>
                </TextContainer>
            </IntroductionContainer>
        </>
    );
}