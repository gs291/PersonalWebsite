import {Close} from '@mui/icons-material';
import {styled} from '@mui/material/styles';
import {Button, Divider, Typography} from '@mui/material';


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

export default function ModalHeader({setOpen}) {

    const handleClose = () => setOpen(false);

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
            <Divider />
        </>
    );
}