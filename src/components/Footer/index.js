import React from "react";
import { Link, Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
  rootTyp1: {
    padding: theme.spacing(4),
    textTransform: "uppercase"
  },
  rootTyp2: {
    padding: theme.spacing(4),
  }
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='false' className={classes.root}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h5"className={classes.rootTyp1} >
          &copy; quizgame-wa.vercel.app
        </Typography>
        <Typography variant="h5" component="h5" className={classes.rootTyp2}>
        Projeto desenvolvido por:
          Joir Neto / {' '}
          <Link href="https://linkedin.com/in/joir-neto" underline="hover" color="inherit" >
            Linkedin
          </Link> / {' '}
          <Link href="https://github.com/joirneto" underline="hover" color="inherit">
            Github
          </Link>
        </Typography>
      </Box>
    </Container>
  )
};

export default Footer;

