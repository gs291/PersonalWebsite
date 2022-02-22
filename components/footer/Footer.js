import {styled} from '@mui/material/styles';

import GitHub from '../icon-links/GitHub';
import Twitter from '../icon-links/Twitter';
import LinkedIn from '../icon-links/LinkedIn';
import Polywork from '../icon-links/Polywork';
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
            <LinkedIn href="https://www.linkedin.com/in/gs291" />
            <GitHub href="https://github.com/gs291" />
            <Polywork href="https://poly.work/sanchegr" />
        </FooterContainer>
    );
}