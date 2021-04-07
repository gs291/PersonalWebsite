import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const IntroductionContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${siteColors.text.dark};
  background-color: ${siteColors.background.main.dark};
  min-height: 85vh;
`;

export default function Introduction() {
    return (
        <>
            <IntroductionContainer>
                <Typography variant="h2" component="h1">
                    Hi! I'm Gregory Sanchez!
                </Typography>
                <Typography variant="h5">
                    A Full Stack Developer
                </Typography>
            </IntroductionContainer>
        </>
    );
}