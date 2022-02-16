import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import {Button, Typography} from '@mui/material';

import {getMobile} from '../../lib/redux/selectors';
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from '../../lib/utils/ga4';


const ButtonContainer = styled('div')`
  width: 100%;
  margin: 10px 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GA4_CONTACT_ME_ID = "CONTACT_ME";

export default function ContactMeButton({setOpenModal}) {
    const mobile = useSelector(getMobile);

    const handleClick = () => {
        setOpenModal(prevOpen => !prevOpen);

        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_CONTACT_ME_ID}`
        });
    };

    return (
        <>
            <ButtonContainer>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleClick}
                >
                    <Typography variant={mobile ? 'h6' : 'h5'}>
                        Contact Me
                    </Typography>
                </Button>
            </ButtonContainer>
        </>
    );
}