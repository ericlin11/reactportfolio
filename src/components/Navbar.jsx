import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconLink from "./IconLink"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{
                background: '#1f2833', position: 'fixed', top: '0', overflow: 'hidden',
                display: 'flex', justifyContent: 'space-between',
            }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left" style={{ color: '#C5C6C7' }}>
                        Eric Lin
                    </Typography>
                    <IconLink link="https://www.linkedin.com/in/eric-lin-4738b9174/" icon=<LinkedInIcon /> />
                    <IconLink link="https://github.com/ericlin11" icon=<GitHubIcon /> />
                </Toolbar>
            </AppBar>
        </Box>
    );
}