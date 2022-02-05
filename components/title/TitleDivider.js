import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import FixedDivider from '../divider/FixedDivider';
import {getDarkMode} from '../../lib/redux/selectors';

const Text = styled(Typography)`
  width: max-content;
  border-bottom: 6px solid ${props => props.theme.palette.border.main};
  transition: 0.3s;
`;

const TextContainer = styled('div')`
  width: 100%;
  text-align: left;
  margin-top: 30px;
`;

export default function TitleDivider({className, title}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TextContainer className={className}>
                <Text variant="h2" data-dm={darkMode}>
                    {title}
                </Text>
            </TextContainer>
            <FixedDivider width={100} />
        </>
    );
}