import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import giza from '../img/card/giza.jpg';
import tajmahal from '../img/card/tajmahal.jpg';
import machuPicchu from '../img/card/machu.jpg';
import chichenItza from '../img/card/chichen.jpg';
import colosseum from '../img/card/colossium.jpg';
import greatWall from '../img/card/great-wall.jpg';
import { Grid, Container, Box, styled } from "@mui/material";

const wonders = [
    {
        name: 'Great Wall of China',
        location: 'China',
        img: greatWall,
        description: 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.',
    },
    {
        name: 'Tajmahal',
        location: 'India',
        img: tajmahal,
        description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.',
    },
    {
        name: 'Machu Picchu',
        location: 'Peru',
        img: machuPicchu,
        description: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers northwest of Cuzco.',
    },
    {
        name: 'Giza Pyramid',
        location: 'Egypt',
        img: giza,
        description: 'The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
    },
    {
        name: 'Colosseum',
        location: 'Italy',
        img: colosseum,
        description: 'The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheater in the world today, despite its age.',
    },
    {
        name: 'Chichen Itza',
        location: 'Mexico',
        img: chichenItza,
        description: 'Chichen Itza is a complex of Mayan ruins on Mexico’s Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan, dominates the ancient city, which thrived from around 600 A.D. to the 1200s.',
    }
];

const StyledCardContent = styled(CardContent)({
    height: '12rem',
    // backgroundColor: '#f5f5f5',
});
const StyledContainer = styled(Container)(({ theme }) => ({
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1590664216212-62e763768cae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    padding: theme.spacing(10),
    color: '#fff', // Ensures the text is readable
    minHeight: '100vh',
    minWidth: '100%',
  '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0, 0.4)' , // Semi-transparent overlay
        zIndex: 1,
    },
  '> *': {
    position: 'relative',
    zIndex: 2,
    },
}));
const Home = () => {
    return (
        <>
            <Navbar />
                <StyledContainer maxWidth="sm">
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 12, mb: 10 }}>
                        <Grid container spacing={4}>
                            {wonders.map((wonder, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={wonder.img}
                                            alt="green iguana"
                                        />
                                        <StyledCardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {wonder.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {wonder.description}
                                            </Typography>
                                        </StyledCardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </StyledContainer>
            <Footer />
        </>
    )
}

export default Home;