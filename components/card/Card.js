import {Paper} from '@mui/material';
import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';

import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';


const Info = styled(Paper, globalOptions)`
  width: ${props => props['data-m'] ? 95 : 90}%;
  padding: 3em ${props => props['data-m'] ? 1 : 2}em;
  border-radius: 20px;
  transition: 0.3s;

  filter: drop-shadow(5px 5px 5px ${props => props.theme.palette.shadow.main});

  &:hover,
  &:active,
  &:focus {
    filter: drop-shadow(10px 10px 5px ${props => props.theme.palette.shadow.main});
  }
`;

const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Card({ className, children }) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <InfoContainer className={className}>
                <Info data-m={mobile}>
                    {children}
                </Info>
            </InfoContainer>
        </>
    );
}