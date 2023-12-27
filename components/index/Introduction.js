import Image from 'next/image';
import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import DarkMode from "../dark-mode/DarkMode";
import headerPic from '../../public/header.jpg';
import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';
import SplashBackground from '../background/SplashBackground';


const IntroductionContainer = styled('header', globalOptions)`
  background-color: ${props => props.theme.palette.background.default};
  min-height: 82.5vh;
  position: relative;
`;

const DarkModeContainer = styled('div', globalOptions)`
  position: absolute;
  z-index: 0;
  bottom: 20px;
  right: ${props => props['data-m'] ? 10 : 30}vw;
`;

const TextContainer = styled('div', globalOptions)`
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  align-items: center;
  position: absolute;
  
  width: 100%;
  height: 100%;
  padding: 0 ${props => props['data-m'] ? 0 : '5%'};
  padding-top: 5rem;
  transition: 0.3s;
  margin-top: ${props => props['data-m'] ? '5vh' : '10vh'};

  @media only screen and (orientation: landscape) and (max-device-width : 1223px) {
    margin-top: -10vh;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Subtitle = styled(Typography, globalOptions)`
  margin-top: ${props => props['data-m'] ? 1 : 2}rem;
`;

const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 30px;
`;

const ImageWrapper = styled('div', globalOptions)`
  position: relative;

  width: ${props => props['data-m'] ? 200 : 300}px;
  height: ${props => props['data-m'] ? 200 : 300}px;
  padding: 0 ;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 2rem;
`;


export default function Introduction({className}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <IntroductionContainer className={className} data-m={mobile}>
                <SplashBackground />
                <TextContainer data-m={mobile}>
                    <ImageContainer>
                        <ImageWrapper data-m={mobile}>
                            <StyledImage
                                src={headerPic}
                                quality={100}
                                alt="Picture of Gregory Sanchez"
                                layout="fill"
                                priority
                            />
                        </ImageWrapper>
                    </ImageContainer>
                    <div>
                        <Typography variant={mobile ? 'h2' : 'h1'} component="h1">
                            Gregory Sanchez
                        </Typography>
                        <Subtitle variant={mobile ? 'h5' : 'h3'} data-m={mobile}>
                            A Full Stack Developer
                        </Subtitle>
                    </div>
                </TextContainer>
                <DarkModeContainer data-m={mobile}>
                    <DarkMode />
                </DarkModeContainer>
            </IntroductionContainer>
        </>
    );
}