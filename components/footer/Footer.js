import {styled} from '@mui/material/styles';

import GitHub from '../icon-links/GitHub';
import Twitter from '../icon-links/Twitter';
import Linkedin from '../icon-links/Linkedin';
import Instagram from '../icon-links/Instagram';


const FooterContainer = styled('footer')`
  display: flex;
  flex-direction: row;
  gap: 0 20px;
  height: 100px;
`;

export default function Footer({ className }) {

    return (
        <FooterContainer className={className}>
            <Twitter href="https://twitter.com/GS_291" />
            <Instagram href="https://www.instagram.com/gregory_sanchez/" />
            <Linkedin href="https://www.linkedin.com/in/gregory-sanchez-05b211159" />
            <GitHub href="https://github.com/gs291" />
        </FooterContainer>
    );
}