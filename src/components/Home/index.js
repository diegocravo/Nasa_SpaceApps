import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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

function CardItem() {
    return (
        <div style={{ display: "flex", alignItens: "center", justifyContent: "center", height: "150px", backgroundColor: '#c4c4c4', borderRadius: "5px" }}>
            <LockIcon style={{ margin: "auto", }} />
        </div>
    )
}

Item.propTypes = {
    sx: PropTypes.object,
};

export default function Home() {
    return (
        <Container maxWidth="lg" style={{ padding: "20px" }}>
            <div style={{ width: '100%' }}>
                <Typography style={{textAlign: "center"}} variant="h2" component="div" gutterBottom>
                    Home
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 2,
                        gridTemplateColumns: 'repeat(4, 1fr)',
                    }}
                >
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </Box>
            </div>
        </Container>
    );
}