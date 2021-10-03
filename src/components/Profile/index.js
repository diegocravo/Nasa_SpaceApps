import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function Profile() {
    return (
        <Container maxWidth="lg">
            <div style={{ marginBottom: "30px" }}>
                <Typography style={{ textAlign: "center", color: "gray"}} variant="h3" component="Router" gutterBottom>
                    Profile
                </Typography>
            </div>

            <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar style={{ padding: "10px"}}>
                        <Avatar sx={{ width: 120, height: 120 }} alt="Remy Sharp" src="https://th.bing.com/th/id/R.f6d44e83b41779db944405657c7ee322?rik=HAi75Jey0i%2bgcw&riu=http%3a%2f%2fofad.org%2ffiles%2fimagecache%2fdaily_picture%2fdaily-photo%2frecent-and-random-portraits_8.jpg&ehk=uUJp5AvkCu4tGk%2birXvV%2f%2bZOAPvIGqVlh9mkNssRr04%3d&risl=&pid=ImgRaw&r=0" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Bruno Marques"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Bruno Marques
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </Container>
    );
}