import {styled} from '@mui/material/styles';


const RightToLeftAnimation  = styled('div')`
  @keyframes scrollingRight{
    from{
      height: 80px;
      opacity: 30%;
      right: 110vw;
    }

    to{
      height: 0;
      opacity: 0;
      right: -10vw;
    }
  }

  top: ${props => props.top}%;
  animation-delay: -${props => props.delay}s;
  animation-name: scrollingRight;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  height: 100px;
  width: 100vw;
  right: 110vw;
  filter: blur(1px);
  background-color: ${props => props.backgroundcolor};
`;

export default function RightToLeft({top, delay, backgroundColor, updateBackgroundColor}) {

    return (
        <>
            <RightToLeftAnimation top={top} delay={delay} backgroundcolor={backgroundColor} onAnimationIteration={updateBackgroundColor}/>
        </>
    );
}