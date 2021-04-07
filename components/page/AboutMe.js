import styled from "@emotion/styled";
import {Grid, Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const AboutMeContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  color: ${siteColors.text.dark};
  margin-bottom: 20px;
`;

export default function AboutMe() {
    return (
        <>
            <AboutMeContainer container
                              direction="column"
                              alignItems="center"
            >
                <Grid item>
                    <Typography variant="h4">
                        Hello
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">
                        This is all about me and me and me.
                    </Typography>
                </Grid>
            </AboutMeContainer>
        </>
    );
}