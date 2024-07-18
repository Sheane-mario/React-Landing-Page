import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Container)(({ theme }) => ({
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    minHeight: '100vh',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
        '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
            zIndex: 1,
        },
    '> *': {
        position: 'relative',
        zIndex: 2,
    },
}));

const FormPaper = styled(Paper)({
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
    opacity: 0.7,
});

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'This field is required.';
        tempErrors.email = formData.email ? '' : 'This field is required.';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is not valid.';
        }
        tempErrors.message = formData.message ? '' : 'This field is required.';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };
    return (
        <>
            <Navbar />
            <BackgroundContainer>
                <FormPaper>
                    <Typography variant="h4" gutterBottom>Contact Us</Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                {...(errors.name && { error: true, helperText: errors.name })}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                {...(errors.email && { error: true, helperText: errors.email })}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                {...(errors.message && { error: true, helperText: errors.message })}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Send</Button>
                            </Grid>
                            {successMessage && (
                            <Grid item xs={12}>
                                <Typography variant="body1" color="success.main">{successMessage}</Typography>
                            </Grid>
                            )}
                        </Grid>
                    </form>
                    <Box mt={5}>
                    <Typography variant="h6">Our Contact Information</Typography>
                    <Typography variant="body1">Address: 123 Valley Road, Nature Town</Typography>
                    <Typography variant="body1">Phone: (123) 456-7890</Typography>
                    <Typography variant="body1">Email: contact@natureexplorers.com</Typography>
                    </Box>
                </FormPaper>
            </BackgroundContainer>
            <Footer />
        </>
    )
}
export default ContactUs;