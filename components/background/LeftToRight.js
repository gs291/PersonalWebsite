import {styled} from '@mui/material/styles';


const LeftToRightAnimation  = styled('div')`
  @keyframes scrollingLeft{
    from{
      height: 80px;
      opacity: 40%;
      left: 110vw;
    }

    to{
      height: 0;
      opacity: 0;
      left: -10vw;
    }
  }

  top: ${props => props.top}%;
  animation-delay: -${props => props.delay}s;
  animation-name: scrollingLeft;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  height: 100px;
  width: 100vw;
  left: 110vw;
  filter: blur(1px);
  background-color: ${props => props.backgroundcolor};
`;

export default function LeftToRight({top, delay, backgroundColor, updateBackgroundColor}) {

    return (
        <>
            <LeftToRightAnimation top={top} delay={delay} backgroundcolor={backgroundColor} onAnimationIteration={updateBackgroundColor}/>
        </>
    );
}