import * as React from 'react';
import {Drawer, styled, useTheme, CssBaseline, IconButton} from "@mui/material";
import AppBar ,{AppBarProps}from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import {NavLink} from "react-router-dom";


const drawerWidth=240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface MuiAppBarProps extends AppBarProps {
    open?: boolean;
}

const MuiAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<MuiAppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

type Props = {
    children:React.ReactNode;
};


const Drawer_dashboard:React.FC<Props> =({children}) => {
    const theme = useTheme();
    const [open,setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }
    return (
        <React.Fragment>
            <div>
                <Box sx={{display:"flex"}}>
                    <CssBaseline/>
                    <MuiAppBar position={"fixed"} open={open}>
                        <Toolbar>
                            <IconButton color={"inherit"} aria-label="open drawer"
                                        onClick={handleDrawerOpen} edge="start"
                                        sx={{mr:2, ...(open && {display:"none"})}}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant={"h6"} noWrap component={"div"}>
                                DashBoard
                            </Typography>
                        </Toolbar>
                    </MuiAppBar>
                    <Drawer sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        }
                    }} variant={"persistent"} anchor={"left"}
                            open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider/>
                        <List>
                            <NavLink end to={"/dashboard/:id/home"}>
                                <ListItem key={"Home"} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={"Home"}/>
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink end to={'/dashboard/:id/vc'}>
                                <ListItem key={"VoiceChat"} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <VoiceChatIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={"VC Channel"}/>
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        </List>
                    </Drawer>
                    <Main open={open}>
                        <DrawerHeader/>
                        {children}
                    </Main>
                </Box>
            </div>
        </React.Fragment>
    );
}


export default Drawer_dashboard;