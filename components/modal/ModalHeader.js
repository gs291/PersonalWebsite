import {Close} from '@mui/icons-material';
import {styled} from '@mui/material/styles';
import {Button, Typography} from '@mui/material';
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from '../../lib/utils/ga4';


const HeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LeftHeader = styled('div')`
  padding-left: 20px;
  width: 75%;
`;

const RightHeader = styled('div')`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GA4_CLOSE_MODAL_ID = "CLOSE_MODAL";

export default function ModalHeader({setOpen}) {

    const handleClose = () => {
        setOpen(false);

        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_CLOSE_MODAL_ID}`
        });
    };

    return (
        <>
            <HeaderContainer>
                <LeftHeader>
                    <Typography variant="h5">
                         Get in touch
                    </Typography>
                </LeftHeader>
                <RightHeader>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                    >
                        <Close />
                    </Button>
                </RightHeader>
            </HeaderContainer>
        </>
    );
}