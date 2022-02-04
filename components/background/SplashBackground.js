import styled from '@emotion/styled';

import Animator from './Animator';

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

export default function SplashBackground({}) {

    return (
        <>
            <Background>
                <Animator direction="L2R" top={10} delay={0}/>
                <Animator direction="R2L" top={20} delay={6}/>
                <Animator direction="L2R" top={30} delay={2}/>
                <Animator direction="R2L" top={50} delay={8}/>
                <Animator direction="L2R" top={70} delay={4}/>
                <Animator direction="R2L" top={85} delay={10}/>
            </Background>
        </>
    );
}