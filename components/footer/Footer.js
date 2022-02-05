import {Link} from '@mui/material';
import {styled} from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterContainer = styled('footer')`
  display: flex;
  flex-direction: row;
  height: 70px;
`;

const SocialMedia = styled(Link)`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  border-radius: 20%;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.theme.palette.border.main};
    color: ${props => props.theme.palette.textOpposite.primary};
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

    return (
        <FooterContainer className={className}>
            <SocialMedia
                color="inherit"
                href="https://twitter.com/GS_291"
            >
                <TW />
            </SocialMedia>
            <SocialMedia
                color="inherit"
                href="https://www.instagram.com/gregory_sanchez/"
            >
                <INS />
            </SocialMedia>
            <SocialMedia
                color="inherit"
                href="https://www.linkedin.com/in/gregory-sanchez-05b211159"
            >
                <LN />
            </SocialMedia>
            <SmallGHLink
                color="inherit"
                href="https://github.com/gs291"
            >
                <GH />
            </SmallGHLink>
        </FooterContainer>
    );
}