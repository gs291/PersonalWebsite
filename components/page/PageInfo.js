import {Paper} from "@mui/material";
import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';

import siteColors from '../../lib/utils/siteColors';
import {getDarkMode, getMobile} from '../../lib/redux/selectors';

const Info = styled(Paper)`
  width: ${props => props['data-m'] ? 95 : 80}%;
  padding: 3em ${props => props['data-m'] ? 0.5 : 2}em;
  border-radius: 20px;
  transition: 0.3s;

  filter: drop-shadow(5px 5px 5px ${props => props['data-dm'] ? siteColors.background.card.shadow.dark : siteColors.background.card.shadow.light});

  &:hover,
  &:active,
  &:focus {
    filter: drop-shadow(10px 10px 5px ${props => props['data-dm'] ? siteColors.background.card.shadow.dark : siteColors.background.card.shadow.light});
  }
`;

const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PageInfo({ className, children }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <InfoContainer className={className}>
                <Info data-dm={darkMode} data-m={mobile}>
                    {children}
                </Info>
            </InfoContainer>
        </>
    );
}