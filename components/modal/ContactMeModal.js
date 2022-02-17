import {useState} from 'react';
import {styled} from '@mui/material/styles';
import {Box, Divider, Modal} from '@mui/material';

import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';


const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.palette.background.paper};
  border-radius: 20px;
`;

const ModalDivider = styled(Divider)`
  border-color: ${props => props.theme.palette.primary.main};
`;

export default function ContactMeModal({open, setOpen}) {
    const [form, setForm] = useState({"name": "", "email": "", "message": ""})
    const [errors, setErrors] = useState({"name": false, "email": false, "message": false})

    const handleClose = () => {
        setForm({"name": "", "email": "", "message": ""});
        setErrors({"name": false, "email": false, "message": false});

        setOpen(false);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <ModalContainer>
                    <ModalHeader handleClose={handleClose} />
                    <ModalDivider />
                    <ModalBody errors={errors} form={form} setForm={setForm} />
                    <ModalDivider />
                    <ModalFooter form={form} setForm={setForm} setErrors={setErrors} />
                </ModalContainer>
            </Modal>
        </>
    );
}