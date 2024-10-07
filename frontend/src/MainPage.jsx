import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { TESTIMONIALS, FEATURES, FOOTER_BOX_STYLE } from './Constants/MainContent';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const navigate = useNavigate()
    return (
        <Box>
            <Box
                sx={FOOTER_BOX_STYLE}
            >
                <Typography variant="h3" sx={{ zIndex: 2, mb: 2 }}>
                    Welcome to the School Management Tool
                </Typography>
                <Typography variant="h5" sx={{ zIndex: 2, mb: 4 }}>
                    Your trusted partner in education management
                </Typography>
                <Button variant="contained" sx={{ zIndex: 2 }} onClick={() => navigate('/subjects')}>
                    Get Started
                </Button>
            </Box>

            <Box sx={{ backgroundColor: '#ffffff', padding: 4, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Why Choose Us?
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {FEATURES.map((feature) => (
                        <Grid item xs={12} sm={6} md={4} key={feature.id}>
                            <Box sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1">
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    What Our Users Say
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                            <Box sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                                    "{testimonial.text}"
                                </Typography>
                                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                                    - {testimonial.author}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default MainPage;
