import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Typography from '@mui/material/Typography';

export default function Ranking() {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    //   function ListItem({name, link, points}) {
    //     return (
    //         <ListItem
    //           key={name}
    //           disablePadding
    //         >
    //             <ListItemAvatar>
    //               <Avatar
    //                 alt={name}
    //                 src={link}
    //               />
    //             </ListItemAvatar>
    //             <ListItemText id={name} primary={name} />
    //             <ListItemText id={points}>{points} <MilitaryTechIcon /></ListItemText>
    //         </ListItem>
    //       ); 
    //   }

    return (
        <Container maxWidth="lg" style={{ padding: "20px" }}>
            <div style={{ marginBottom: "30px", }}>
                <Typography style={{ textAlign: "left", color: "gray", marginY: "50px" }} variant="h3" component="Router" gutterBottom>
                    Ranking
                </Typography>
            </div>
            <div style={{ display: "flex", alignItens: "center", justifyContent: "center" }}>
                <List dense sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', padding: "10px" }}>
                    {/* {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                            <ListItem
                                style={{ padding: "5px" }}
                                key={value}
                                disablePadding
                            >

                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={`/static/images/avatar/${value + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`nome da pessoa ${value}`} />
                                <ListItemText id={labelId}>{value * 35} <MilitaryTechIcon /></ListItemText>

                            </ListItem>
                        );
                    })} */}
                    <ListItem disablePadding style={{ padding: "5px" }}>
                        <ListItemAvatar >
                            <Avatar alt="Bruno Queiroz" src="https://th.bing.com/th/id/R.f6d44e83b41779db944405657c7ee322?rik=HAi75Jey0i%2bgcw&riu=http%3a%2f%2fofad.org%2ffiles%2fimagecache%2fdaily_picture%2fdaily-photo%2frecent-and-random-portraits_8.jpg&ehk=uUJp5AvkCu4tGk%2birXvV%2f%2bZOAPvIGqVlh9mkNssRr04%3d&risl=&pid=ImgRaw&r=0" />
                        </ListItemAvatar>
                        <ListItemText primary="Bruno Marques" />
                        <ListItemText>1200 <MilitaryTechIcon style={{color: "#ffbf00"}} /></ListItemText>
                    </ListItem>

                    <ListItem disablePadding style={{ padding: "5px" }}>
                        <ListItemAvatar>
                            <Avatar alt="Maria de soza" src="https://revistacontinente.com.br/image/view/news/image/630/mobile" />
                        </ListItemAvatar>
                        <ListItemText primary="Maria deSouza" />
                        <ListItemText>1150 <MilitaryTechIcon style={{color: "#c0c0c0"}} /></ListItemText>
                    </ListItem>

                    <ListItem disablePadding style={{ padding: "5px" }}>
                        <ListItemAvatar>
                            <Avatar alt="Diego Teixeira" src="https://f.i.uol.com.br/fotografia/2021/07/24/162713506160fc1c55ddf33_1627135061_3x2_md.jpg" />
                        </ListItemAvatar>
                        <ListItemText primary="Diego Teixeiras" />
                        <ListItemText>1100 <MilitaryTechIcon style={{color: "#cd7f32"}} /></ListItemText>
                    </ListItem>

                    <ListItem disablePadding style={{ padding: "5px" }}>
                        <ListItemAvatar>
                            <Avatar alt="Joana" src="https://s2.glbimg.com/C6-6R8ybV2VuAThGpoEN1IDemZs=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/03/24/ana_hikari_-_credito_giselle_dias_foto_walter_lobato_beleza_4_1.jpg" />
                        </ListItemAvatar>
                        <ListItemText primary="Joana Vasconc" />
                        <ListItemText>1100 <MilitaryTechIcon /></ListItemText>
                    </ListItem>

                    <ListItem disablePadding style={{ padding: "5px" }}>
                        <ListItemAvatar>
                            <Avatar alt="Joana" src="https://image.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg" />
                        </ListItemAvatar>
                        <ListItemText primary="Ramon Almeida" />
                        <ListItemText>1000 <MilitaryTechIcon /></ListItemText>
                    </ListItem>
                </List>
            </div>
        </Container>
    );
}