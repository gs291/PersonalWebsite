import {TextField} from '@mui/material';
import {styled} from '@mui/material/styles';


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
                    label="Your Name"
                    placeholder="Gregory Sanchez"
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
                    label="Your Email Address"
                    placeholder="my.name@email.com"
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
                    label="Leave a Message"
                    helperText="Feel free to inquire about anything and to be as thorough as you'd like!"
                    placeholder="I'd like a website and mobile app for my business."
                    multiline
                    rows={4}
                    margin="normal"
                    onChange={handleChange}
                    value={form.message}
                    error={errors.message}
                    {...(errors.message ? {helperText: "Empty message"} : null)}
                />
            </BodyContainer>
        </>
    );
}