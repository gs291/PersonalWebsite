import {useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import {Button, Typography} from '@mui/material';

import {getMobile} from '../../lib/redux/selectors';


const ButtonContainer = styled('div')`
  width: 100%;
  margin: 10px 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ContactMeButton({setOpenModal}) {
    const mobile = useSelector(getMobile);

    const handleClick = () => setOpenModal(prevOpen => !prevOpen);

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