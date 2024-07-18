import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Typography, Box, Grid, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExploreIcon from '@mui/icons-material/Explore';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicIcon from '@mui/icons-material/Public';
import sheane from '../img/card/mheanee.jpg';
import mario from '../img/card/mario.jpg';
import maya from '../img/card/maya.jpg';

const teamMembers = [
    {
      name: 'Sheane “Trailblazer” Rivers',
      role: 'Founder & Chief Explorer',
      bio: 'Sheane’s love for rivers began during childhood fishing trips with her grandfather. She’s the one who wades into icy streams to capture that perfect shot.',
      imgN: 'mheane.jpg',
      src: sheane,
    },
    {
      name: 'Mario “Valley Whisperer” Peaks',
      role: 'Creative Director & Landscape Guru',
      bio: 'Mario’s heart belongs to valleys—their contours, their echoes. He once camped solo in the Grand Canyon just to feel its ancient embrace.',
      imgN: 'mario.jpg',
      src: mario,
    },
    {
      name: 'Maya “Pixel Shaman” Sky',
      role: 'Visual Storyteller & Design Sorceress',
      bio: 'Maya weaves magic with pixels. Her artistry turns valleys into poetry and rivers into symphonies. She believes every pixel has a tale to tell.',
      imgN: 'maya.jpg',
      src: maya,
    },
  ];

  const StyledContainer = styled(Container)(({ theme }) => ({
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    padding: theme.spacing(8),
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
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, .7)' : 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
        zIndex: 1,
    },
  '> *': {
    position: 'relative',
    zIndex: 2,
  },
  }));
  
  const StyledBox = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6),
    textAlign: 'center',
  }));
  
  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  }));



const About = () => {
    return (
        <>
        <Navbar />
            <StyledContainer>
                <StyledBox>
                    <Typography variant="h2" component="h1" gutterBottom>
                    Discover Earth’s Hidden Gems
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                    Welcome to our corner of the digital world! We’re passionate explorers, storytellers, and nature enthusiasts.
                    </Typography>
                    <Typography variant="body1">
                    Our mission? To celebrate the awe-inspiring beauty of valleys and rivers across the globe. Let’s introduce ourselves:
                    </Typography>
                </StyledBox>

                <StyledBox>
                    <Typography variant="h4" component="h2" gutterBottom>
                    The Team
                    </Typography>
                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} md={4} key={index}>
                            <StyledPaper elevation={3}>
                                <Avatar sx={{ width: 100, height: 100, margin: '0 auto 20px' }} alt={member.name} src={member.src} />
                                <Typography variant="h6">{member.name}</Typography>
                                <Typography variant="subtitle1">{member.role}</Typography>
                                <Typography variant="body2">{member.bio}</Typography>
                            </StyledPaper>
                            </Grid>
                        ))}
                    </Grid>
                </StyledBox>

                <StyledBox sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography variant="h4" component="h2" gutterBottom>
                    Our Story
                    </Typography>
                    <Typography variant="body1" paragraph>
                    Once upon a time (well, a few years ago), we embarked on a journey. Armed with cameras, notebooks, and a shared sense of wonder, we set out to document Earth’s hidden gems. Valleys whispered secrets, and rivers danced for our lenses. We realized these landscapes weren’t just geographical features—they were living, breathing narratives.
                    </Typography>
                </StyledBox>

                <StyledBox sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography variant="h4" component="h2" gutterBottom>
                    Our Values
                    </Typography>
                    <Typography variant="body1" paragraph>
                    <strong>Curiosity:</strong> We’re insatiably curious. We chase sunsets, follow winding trails, and ask questions. Why does that river curve just so? What legends cling to that valley’s cliffs?
                    </Typography>
                    <Typography variant="body1" paragraph>
                    <strong>Authenticity:</strong> Our pixels are unfiltered. We don’t Photoshop out the wrinkles of time or the scars of weather. Nature wears her imperfections proudly, and so do we.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    <strong>Stewardship:</strong> Valleys and rivers need guardians. We pledge to raise awareness, support conservation efforts, and leave no trace behind.
                    </Typography>
                </StyledBox>

                <StyledBox>
                    <Typography variant="h4" component="h2" gutterBottom color="beige">
                    Milestones
                    </Typography>
                    <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="pink"
                        >
                        2018
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <ExploreIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" color="pink">
                            First Expedition
                        </Typography>
                        <Typography color="beige">First expedition to the Scottish Highlands. Mist, heather, and the River Spey.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="cyan"
                        >
                        2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <InstagramIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" color="cyan">
                            Social Media Launch
                        </Typography>
                        <Typography color="beige">Launched our Instagram account (@ValleysAndRivers). Hello, fellow wanderers!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="palegreen"
                        >
                        2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <PublicIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span" color="palegreen">
                            National Geographic Feature
                        </Typography>
                        <Typography color="beige">Featured in National Geographic’s “Hidden Worlds” photo essay.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    </Timeline>
                </StyledBox>

                <StyledBox>
                    <Typography variant="h4" component="h2" gutterBottom>
                    Testimonials
                    </Typography>
                    <Typography variant="body1" paragraph>
                     <blockquote>"that cradle dreams, rivers that sing—your photos transport me.”</blockquote>
                    <br />—Lena, Nature Enthusiast
                    </Typography>
                    <Typography variant="body1" paragraph>
                   <blockquote> “Your ‘About Us’ page reads like a love letter to Earth. Bravo!”</blockquote>
                    <br />—Sam, Landscape Photographer
                    </Typography>
                </StyledBox>
            </StyledContainer> 
        <Footer />
        </>
    )
}

export default About;