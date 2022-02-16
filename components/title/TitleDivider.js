import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import FixedDivider from '../divider/FixedDivider';
import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';


const TitleContainer = styled('div')`
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: 30px;

  @media only screen and (min-width: 961px) {
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    width: calc(100% + 48px);
  }
  
  @media only screen and (max-width: 600px) {
    width: calc(100% + 32px);
  } 
`;

const Text = styled(Typography)`
  width: max-content;
  border-bottom: 6px solid ${props => props.theme.palette.border.main};
`;

const TextContainer = styled('div', globalOptions)`
  padding-left: ${props => props['data-m'] ? '30px' : '0'};
  width: 100%;
  text-align: left;
  
  transition: 0.3s;
  background-color: ${props => props.theme.palette.background.default};
`;

export default function TitleDivider({className, title, ...rest}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <TitleContainer {...rest}>
                <TextContainer className={className} data-m={mobile}>
                    <Text variant="h2">
                        {title}
                    </Text>
                </TextContainer>
                <FixedDivider width={100} />
            </TitleContainer>
        </>
    );
}