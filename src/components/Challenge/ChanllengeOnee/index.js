import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Menina from "../../../assets/menina.png"
import DisNave from "../../../assets/DisNave.png"
import { BrowserRouter as Router, useHistory } from "react-router-dom";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                display: "flex",
                bgcolor: '#c4c4c4',
                color: 'black',
                p: 1,
                borderRadius: 1,
                textAlign: 'center',
                justifyContent: "center",
                fontSize: 19,
                fontWeight: '700',
                height: "100px",
                ...sx,
            }}
            {...other}
        />
    );
}

function CardItem({color = '#c4c4c4'}) {
    return (
        <div style={{ display: "flex", alignItens: "center", justifyContent: "center", height: "150px", backgroundColor: color, borderRadius: "5px" }}>
            <LockIcon style={{ margin: "auto", }} />
        </div>
    )
}
function CardItem1() {
    return (
        <div style={{ display: "flex", alignItens: "center", justifyContent: "center", height: "150px", backgroundColor: '#F8CFF4', borderRadius: "5px" }}>
            <img style={{height: "150px",}} src={Menina} alt="first challenge" />
        </div>
    )
}
function CardItem2() {
    return (
        <div style={{ display: "flex", alignItens: "center", justifyContent: "center", height: "150px", backgroundColor: '#7DCAAC', borderRadius: "5px" }}>
            <img style={{height: "150px",}} src={DisNave} alt="first challenge" />
        </div>
    )
}

Item.propTypes = {
    sx: PropTypes.object,
};

export default function ChanllengeOnee() {

    let history = useHistory();

    return (
        <Container maxWidth="lg" style={{ padding: "20px" }}>
            <Router style={{ width: '100%' }}>
                <div style={{ marginBottom: "30px"}}>
                <Typography style={{textAlign: "left", color: "gray", marginY: "50px"}} variant="h3" component="Router" gutterBottom>
                    Challenges
                </Typography>
                </div>
                <Box
                    sx={{
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 2,
                        gridTemplateColumns: 'repeat(4, 1fr)',
                    }}
                >
                    <div onClick={() => history.push("/Challenge/1")}>
                    <CardItem1 source={Menina} />
                    </div>
                    <CardItem2 source={DisNave} />
                    <CardItem color="#B4BDFF" />
                    <CardItem color="#FFE6A7" />
                    <CardItem color="#FFBEBE" />
                    <CardItem color="#D6EEEC" />
                </Box>
            </Router>
        </Container>
    );
}