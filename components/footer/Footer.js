import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: ${siteSizes.footer.height};
`;

const FooterText = styled(Typography)`
  font-family: sans-serif;
`;

export default function Footer({ className }) {
    return (
        <FooterContainer className={className}>
            <FooterText component="span" variant="body2">
                Social Media
            </FooterText>
        </FooterContainer>
    );
}