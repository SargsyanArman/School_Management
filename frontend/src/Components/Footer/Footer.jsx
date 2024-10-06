import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import { styled } from '@mui/system';
import { BOX_STYLES, INFO_ME } from '../../Constants/FooterConstants'

const FooterContainer = styled(Box)({
    background: 'linear-gradient(90deg, #9bb8d5 30%, #333 70%)',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    position: 'relative',

});

const SocialButton = styled(Button)({
    color: 'white',
    borderColor: 'white',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
});

const Footer = () => {
    return (
        <FooterContainer>
            <Typography variant="h5" gutterBottom>
                Connect with Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <Box>

                    <Typography variant="body1" gutterBottom>
                        Have questions? I'd love to hear from you!
                    </Typography>
                    <Typography variant="body1">
                        Email: <span style={{ color: '#ffeb3b' }}>{INFO_ME.email}</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Phone: <span style={{ color: '#ffeb3b' }}>{INFO_ME.phoneNumber}</span>
                    </Typography>
                </Box>
                <Box sx={BOX_STYLES}>
                    <SocialButton
                        variant="outlined"
                        href={INFO_ME.facebook}
                        target="_blank"
                    >
                        <Facebook />
                    </SocialButton>
                    <SocialButton
                        variant="outlined"
                        href={INFO_ME.instagram}
                        target="_blank"
                    >
                        <Instagram />
                    </SocialButton>
                </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} School Management Tool. All rights reserved.
                </Typography>
            </Box>
        </FooterContainer>
    );
};

export default Footer;
