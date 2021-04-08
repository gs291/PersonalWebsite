import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: ${siteSizes.footer.height};
  color: ${props => props.dark ? siteColors.text.dark : siteColors.text.light};
  background-image: linear-gradient(${props => props.dark ? siteColors.background.main.dark : siteColors.background.main.light }, ${props => props.dark ? siteColors.footer.dark :  siteColors.footer.light});
`;

const FooterText = styled(Typography)`
  font-family: sans-serif;
`;

export default function Footer({ className }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <FooterContainer className={className} dark={darkMode ? 1 : 0}>
            <FooterText component="span" variant="body2">
                Social Media
            </FooterText>
        </FooterContainer>
    );
}