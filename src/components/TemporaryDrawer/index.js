import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExploreIcon from '@mui/icons-material/Explore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Logo from "../../assets/goup_logo.png"
import NightlightIcon from '@mui/icons-material/Nightlight';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div style={{ display: "flex", padding: "25px", alignItens: "center", justifyContent: "center" }}>
                <img src={Logo} alt="logo" />
            </div>
            <List>
                <ListItem button key="home">
                    <ListItemIcon>
                        <HomeIcon style={{ color: "#9214B5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="profile">
                    <ListItemIcon>
                        <PersonIcon style={{ color: "#9214B5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button key="Explore">
                    <ListItemIcon>
                        <ExploreIcon style={{ color: "#9214B5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Explore" />
                </ListItem>
                <ListItem button key="Store">
                    <ListItemIcon>
                        <ShoppingBagIcon style={{ color: "#9214B5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Store" />
                </ListItem>
                <ListItem button key="Add">
                    <ListItemIcon>
                        <PersonAddAlt1Icon style={{ color: "#9214B5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Add Friends" />
                </ListItem>
                <ListItem button key="settings">
                    <ListItemIcon>
                        <SettingsIcon style={{ color: "#9214B5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
            <div style={{ position: "absolute", left: "60px", bottom: "20px" }}>
                <Button style={{ backgroundColor: "#9214B5" }} variant="contained"><NightlightIcon />        Dark Mode</Button>
            </div>
        </Box>
    );

    return (
        <div style={{ height: "60px", display: "flex", justifyContent: "space-between", alignItens: "center" }}>
            <div>
                <Button style={{ color: "#9214B5", fontWeight: "bold", fontSize: "large" }} onClick={toggleDrawer('left', true)}><MenuIcon style={{ fontSize: "40px" }} /> MENU  </Button>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </div>
            <div style={{ width: "200px", display: "flex", justifyContent: "center", alignItens: "center", padding: "10px", marginRight: "30px" }}>
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.f6d44e83b41779db944405657c7ee322?rik=HAi75Jey0i%2bgcw&riu=http%3a%2f%2fofad.org%2ffiles%2fimagecache%2fdaily_picture%2fdaily-photo%2frecent-and-random-portraits_8.jpg&ehk=uUJp5AvkCu4tGk%2birXvV%2f%2bZOAPvIGqVlh9mkNssRr04%3d&risl=&pid=ImgRaw&r=0" />
                    <Stack spacing={-1}>
                        <Typography variant="caption" gutterBottom component="div">
                            Welcome, <br />
                        </Typography>
                        <Typography style={{ fontWeight: "bold" }} variant="caption" gutterBottom component="div">
                            Bruno Marques
                        </Typography>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}