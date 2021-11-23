import React from "react";
import {Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),

  },
  quiz: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}))

const Header = () => {

  const classes = useStyles()
  return (
    <Container fixed maxWidth='false' className={classes.root}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h1" component="div" className={classes.quiz}>
          QUIZ GAME
        </Typography>
      </Box>
    </Container>
  )
};

export default Header;