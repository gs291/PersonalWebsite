import {styled} from '@mui/material/styles';
import {Divider, TextField} from '@mui/material';


const BodyContainer = styled('div')`
  padding: 2em 1em;
`;

export default function ModalBody({errors, form, setForm}) {

    const handleChange = (e) => {
        setForm(prevForm => ({...prevForm, [e.target.name]: e.target.value}));
    }

    return (
        <>
            <BodyContainer>
                <TextField
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    margin="normal"
                    onChange={handleChange}
                    error={errors.name}
                    value={form.name}
                    {...(errors.name ? {helperText: "Empty name"} : null)}
                />
                <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    onChange={handleChange}
                    value={form.email}
                    error={errors.email}
                    {...(errors.email ? {helperText: "Invalid email"} : null)}
                />
                <TextField
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    margin="normal"
                    onChange={handleChange}
                    value={form.message}
                    error={errors.message}
                    {...(errors.message ? {helperText: "Empty message"} : null)}
                />
            </BodyContainer>
            <Divider />
        </>
    );
}