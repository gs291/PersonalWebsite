import styled from "@emotion/styled";
import {Link} from "@material-ui/core";
import {useSelector} from "react-redux";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: ${siteSizes.footer.height};
  color: ${props => props.dark ? siteColors.text.dark : siteColors.text.light};
  background-color: ${props => props.dark ? siteColors.background.main.dark :  siteColors.background.main.light};
`;

const SocialMedia = styled(Link)`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  border-radius: 20%;
  color: ${props => props.dark ? "white" : "black"};
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.dark ? "white" : "black"};
    color: ${props => props.dark ? "black" : "white"};
  }
`;

const TW = styled(TwitterIcon)`
  width: 100%;
  height: 100%;

`;

const INS = styled(InstagramIcon)`
  width: 100%;
  height: 100%;
`;

const LN = styled(LinkedInIcon)`
  width: 100%;
  height: 100%;
`;

const GH = styled(GitHubIcon)`
  width: 100%;
  height: 100%;
`;

export default function Footer({ className }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <FooterContainer className={className} dark={darkMode ? 1 : 0}>
            <SocialMedia
                color="inherit"
                href="https://twitter.com/GS_291"
                dark={darkMode ? 1 : 0}
            >
                <TW />
            </SocialMedia>
            <SocialMedia
                color="inherit"
                href="https://www.instagram.com/gregory_sanchez/"
                dark={darkMode ? 1 : 0}
            >
                <INS />
            </SocialMedia>
            <SocialMedia
                color="inherit"
                href="https://www.linkedin.com/in/gregory-sanchez-05b211159"
                dark={darkMode ? 1 : 0}
            >
                <LN />
            </SocialMedia>
            <SocialMedia
                color="inherit"
                href="https://github.com/gs291"
                dark={darkMode ? 1 : 0}
            >
                <GH />
            </SocialMedia>
        </FooterContainer>
    );
}