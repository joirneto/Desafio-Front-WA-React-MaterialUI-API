import React from 'react';
import { Link, Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '16px',
    background: theme.palette.primary.main,
  },
  quiz: {
    color: '#123123',
    background: "ffffff"
  }
}))

const Navbar = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='false' className={classes.root}>
      <Box>
        <Typography variant="h5" component="div">
          <Link href="/" underline="hover" color='#ffffff'>
            QUIZ GAME!
          </Link>
        </Typography>
      </Box>
    </Container>
  )
};

export default Navbar;