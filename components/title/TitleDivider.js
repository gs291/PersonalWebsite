import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import FixedDivider from '../divider/FixedDivider';

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

    return (
        <>
            <TextContainer className={className}>
                <Text variant="h2">
                    {title}
                </Text>
            </TextContainer>
            <FixedDivider width={100} />
        </>
    );
}