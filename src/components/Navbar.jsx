import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigateBeforeRounded } from '@material-ui/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Websites from "./Websites"
import GitHubIcon from '@mui/icons-material/GitHub';


function Navbar(navbar) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense" >
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        {navbar.title}
                    </Typography>
                    <Websites link="https://www.youtube.com" title="About" />
                    <span className="right">
                        <Websites link="https://www.linkedin.com/in/eric-lin-4738b9174/" icon=<LinkedInIcon /> />
                        <Websites link="https://github.com/ericlin11" icon=<GitHubIcon /> />
                    </span>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;