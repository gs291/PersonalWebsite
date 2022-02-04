import {Link} from '@mui/material';
import styled from '@emotion/styled';
import {useSelector} from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import siteSizes from '../../lib/utils/siteSizes';
import siteColors from '../../lib/utils/siteColors';
import {getDarkMode} from '../../lib/redux/selectors';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: ${siteSizes.footer.height};
  color: ${props => props['data-dm'] ? siteColors.text.dark : siteColors.text.light};
  background-color: ${props => props['data-dm'] ? siteColors.background.main.dark :  siteColors.background.main.light};
`;

const SocialMedia = styled(Link)`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  border-radius: 20%;
  color: ${props => props['data-dm'] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;

  &:hover {
    background-color: ${props => props['data-dm'] ? siteColors.background.border.dark : siteColors.background.border.light};
    color: ${props => props['data-dm'] ? siteColors.text.light : siteColors.text.dark};
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

const SmallGHLink = styled(SocialMedia)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GH = styled(GitHubIcon)`
  width: 80%;
  height: 80%;
`;

export default function Footer({ className }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <FooterContainer className={className} data-dm={darkMode}>
            <SocialMedia
                color="inherit"
                href="https://twitter.com/GS_291"
                data-dm={darkMode}
            >
                <TW />
            </SocialMedia>
            <SocialMedia
                color="inherit"
                href="https://www.instagram.com/gregory_sanchez/"
                data-dm={darkMode}
            >
                <INS />
            </SocialMedia>
            <SocialMedia
                color="inherit"
                href="https://www.linkedin.com/in/gregory-sanchez-05b211159"
                data-dm={darkMode}
            >
                <LN />
            </SocialMedia>
            <SmallGHLink
                color="inherit"
                href="https://github.com/gs291"
                data-dm={darkMode}
            >
                <GH />
            </SmallGHLink>
        </FooterContainer>
    );
}